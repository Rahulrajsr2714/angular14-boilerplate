import { environment } from './../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private API_URL = `${environment.api_base_url}`;
	public currentUser!: Observable<any>;
	private currentUserSubject!: BehaviorSubject<any>;

	constructor(
		private httpClient: HttpClient,
		private localStorageService: LocalStorageService
	) {
		this.currentUserSubject = new BehaviorSubject<User>(
			this.localStorageService.getItem('currentUser')
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	// getter: currentUserValue
	public get currentUserValue(): User {
		return this.currentUserSubject.value;
	}

	login(userName: string, password: string) {
		return this.httpClient
			.post<any>(`${this.API_URL}`, {
				userName: userName,
				password: password,
				source: 'User',
			})
			.pipe(
				map((resp: any) => {
					if (resp && resp.data?.token) {
						this.localStorageService.setItem('currentUser', resp.data);
						this.currentUserSubject.next(resp.data);
					}
					return resp;
				})
			);
	}

	signUp(payload: {
		email: 'string';
		displayName: 'string';
		password: 'string';
		mobile: 'string';
	}) {
		return this.httpClient.post<any>(`${this.API_URL}`, payload);
	}

	logout() {
		this.localStorageService.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}
}
