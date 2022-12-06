// prettier-ignore
export interface CoreConfig {

  app             : {
    appName     : string;
    appTitle    : string;
    appLogoImage: string;
    appLanguage :'en'; //Add more language as required
  };
  layout: {
    navbar: {
      hidden               : boolean;
    };
    searchBar: {
      hidden               : boolean;
    };
    footer: {
      hidden               : boolean;
    };
    enableLocalStorage: boolean;
  };
}
