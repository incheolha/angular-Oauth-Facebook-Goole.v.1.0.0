// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';

export const environment = {
  production: false
};


export const googleFirebaseConfig = {
              apiKey: 'AIzaSyBtwh1PFpPTT40ZeECuHGv-FEn9EaQ8X-w',
              authDomain: 'test-244b1.firebaseapp.com',
              databaseURL: 'https://test-244b1.firebaseio.com',
              projectId: 'test-244b1',
              storageBucket: 'test-244b1.appspot.com',
              messagingSenderId: '871488585261'
};

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('240513106639952')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('622864873088-amrnpo8tds07g13ce4brummnurkhil24.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}
