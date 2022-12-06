/**
 *
 * ! IMPORTANT: If the enableLocalStorage option is true then make sure you clear the browser local storage(https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete).
 *  ! Otherwise, it will not take the below config changes and use stored config from local storage.
 *
 */

import { CoreConfig } from './core/models/core-config';

// prettier-ignore
export const coreConfig: CoreConfig = {
  app: {
    appName     : 'testapp',                                        // App Name
    appTitle    : 'testapp', // App Title
    appLogoImage: '',                  // App Logo
    appLanguage : 'en',                                           // App Default Language (en, fr, de, pt etc..)
  },
  layout: {
    navbar: {
      hidden               : false,           // Boolean: true, false
    },
    searchBar: {
      hidden               : false,           // Boolean: true, false
    },
    footer: {
      hidden               : false,           // Boolean: true, false
    },
    enableLocalStorage: true,
  }
}
