'use strict';
angular.module('oc', [
  // your modules
  'main',
  'login',
  'status',
  'ui.router',
  'angular-storage',
  'ngMaterial'
]).config(function ($urlRouterProvider, $mdThemingProvider) {
  //Global APP CONFIG
  //$urlRouterProvider.otherwise('/app/status');
  //https://github.com/angular-ui/ui-router/issues/600

  $urlRouterProvider.otherwise(function ($injector) {
    var $state = $injector.get('$state');
    $state.go('app.status');
  });

  //New "White palette" by extending grey
  var white = $mdThemingProvider.extendPalette('grey', {
    '500': 'ffffff'
  });
  $mdThemingProvider.definePalette('white', white);

  //Login Theme use: <div md-theme="login"> directive
  $mdThemingProvider.theme('login')
    .primaryPalette('white', {
      'default': '500'
    })
    .accentPalette('teal', {
      'default': '500'
    });

  //Default Theme
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('white');
  //End Config
}).run(function ($rootScope, store, $state) {
  //Set page title on route change
  $rootScope.$on('$stateChangeStart', function (e, nextstate) {
    if (nextstate.data && nextstate.data.pageTitle) {
      $rootScope.pageTitle = nextstate.data.pageTitle;
    }

    //Check login status on route change
    if (nextstate.data && nextstate.data.requiresLogin) {
      var token = store.get('token');
      if (!token) {
        console.log(nextstate.data);
        console.log('Token Invalid');
        console.log('Redirecting..');
        e.preventDefault();
        $state.go('login');
      }
    }
  });
});
//TODO: USE $log instead of console.log
