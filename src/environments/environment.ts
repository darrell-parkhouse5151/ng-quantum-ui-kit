// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBGT_rvrsRmTlsIUeq263iodrFtWSHq3sw',
        authDomain: 'ng-quantum-ui-kit.firebaseapp.com',
        databaseURL: 'https://ng-quantum-ui-kit.firebaseio.com',
        projectId: 'ng-quantum-ui-kit',
        storageBucket: 'ng-quantum-ui-kit.appspot.com',
        messagingSenderId: '212249705587'
    }
};
