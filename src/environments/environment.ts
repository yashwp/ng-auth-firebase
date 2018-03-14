// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAml6u7RzEk1X9YnqhWdrfdn9VBhfExX4c',
    authDomain: 'ng-auth-firebase.firebaseapp.com',
    databaseURL: 'https://ng-auth-firebase.firebaseio.com',
    projectId: 'ng-auth-firebase',
    storageBucket: 'ng-auth-firebase.appspot.com',
    messagingSenderId: '98872694644'
  }
};
