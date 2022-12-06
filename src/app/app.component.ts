import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CoreConfig } from './core/models/core-config';
import { CoreConfigService } from './core/services/config.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'test-application';

	private unsubscribeAll: Subject<any> = new Subject();
	coreConfig!: CoreConfig;

	constructor(private coreConfigService: CoreConfigService) {}

	ngOnInit(): void {
		// making the search bar hidden
		// setting enableLocalStorage to false will not
		// set this as apermannet config when route changes the config is replaced
		this.coreConfigService.config = {
			layout: {
				searchBar: {
					hidden: false,
				},
				enableLocalStorage: false,
			},
		};

		this.coreConfigService
			.getConfig()
			.pipe(takeUntil(this.unsubscribeAll))
			.subscribe((config: any) => {
				this.coreConfig = config;
			});
	}
}
