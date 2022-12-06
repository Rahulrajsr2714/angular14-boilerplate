import { CoreConfig } from './models/core-config';
import { CORE_CUSTOM_CONFIG } from './services/config.service';
import {
	ModuleWithProviders,
	NgModule,
	Optional,
	SkipSelf,
} from '@angular/core';

@NgModule()
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('Import CoreModule in the AppModule only');
		}
	}

	static forRoot(config: CoreConfig): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [
				{
					provide: CORE_CUSTOM_CONFIG,
					useValue: config,
				},
			],
		};
	}
}
