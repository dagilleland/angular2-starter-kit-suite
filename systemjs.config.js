/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'scripts',
    '@angular':                   'https://npmcdn.com/@angular',
    '@ngrx':                      'https://npmcdn.com/@ngrx',
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    
    // supporting packages for @ngrx/router
    'query-string':               'https://npmcdn.com/query-string',
    'object-assign':               'https://npmcdn.com/object-assign',
    'path-to-regexp':               'https://npmcdn.com/path-to-regexp',
    'strict-uri-encode':               'https://npmcdn.com/strict-uri-encode',
    'isarray':               'https://npmcdn.com/isarray'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@ngrx/core',
    '@ngrx/router',
    '@ngrx/store'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
