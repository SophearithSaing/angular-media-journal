// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  apiImageUrl: 'https://image.tmdb.org/t/p',
  apiKey: 'c8fec81749b77e079a3c1d1ceffd40f2',
  firebaseConfig: {
    apiKey: 'AIzaSyB-l3PJ89KeQdwcyC19EPLOPWSCSud2VmU',
    authDomain: 'media-journal-a6c37.firebaseapp.com',
    databaseURL: 'https://media-journal-a6c37-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'media-journal-a6c37',
    storageBucket: 'media-journal-a6c37.appspot.com',
    messagingSenderId: '571508045248',
    appId: '1:571508045248:web:da699ef5edd9c54b1ec425'
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
