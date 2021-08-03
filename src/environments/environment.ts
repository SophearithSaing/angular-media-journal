// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieApiUrl: 'https://api.themoviedb.org/3',
  movieApiImageUrl: 'https://image.tmdb.org/t/p',
  movieApiKey: 'c8fec81749b77e079a3c1d1ceffd40f2',
  bookApiUrl: 'https://www.googleapis.com/books/v1/volumes',
  bookApiKey: 'AIzaSyBlo7SOulKQegfEp0859uMefuQwJfdAwqc',
  musicApiUrl: 'https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D',
  musicApiHost: 'deezerdevs-deezer.p.rapidapi.com',
  musicApiKey: '1864b49585msh1b330c9fbd66951p17b655jsn62aa82d9be9b',
  firebaseConfig: {
    apiKey: 'AIzaSyADgG-1D_oG9vYpFDw8b-o2DVA8V8OOKSQ',
    authDomain: 'movie-journal-ee8c8.firebaseapp.com',
    projectId: 'movie-journal-ee8c8',
    storageBucket: 'movie-journal-ee8c8.appspot.com',
    messagingSenderId: '778186559787',
    appId: '1:778186559787:web:ec3897f128123a2eb1b56e'
  },
  firebaseDB: 'https://media-journal-a6c37-default-rtdb.asia-southeast1.firebasedatabase.app',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
