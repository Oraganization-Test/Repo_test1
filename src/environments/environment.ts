// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'digify-rmg',
    appId: '1:198784187617:web:e15e3a03efe9b4f7e7cba0',
    storageBucket: 'digify-rmg.appspot.com',
    locationId: 'asia-east2',
    apiKey: 'AIzaSyAp0I9s05fYjaEwMEl1H8JARUzLufqKuLg',
    authDomain: 'digify-rmg.firebaseapp.com',
    messagingSenderId: '198784187617',
  },
  production: false,
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
