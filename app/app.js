'use strict';
angular.module('oc', [
  // your modules
  'main',
  'login',
  'status',
  'ui.router',
  'angular-jwt',
  'angular-storage'
]).config(function ($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {

  //404 Route
  $urlRouterProvider.otherwise('/app/status');


  //Jwt Interceptor
  jwtInterceptorProvider.tokenGetter = function (store) {
    var token = store.get('userData') ? store.get('userData').token : null;
    if (token) {
      console.log(token);
    }
    return token;
  };

  $httpProvider.interceptors.push('jwtInterceptor');

}).run(function ($rootScope, jwtHelper, store, $state) {
  //Set page title on route change
  $rootScope.$on('$stateChangeStart', function (e, nextstate) {
    if (nextstate.data && nextstate.data.pageTitle) {
      $rootScope.pageTitle = nextstate.data.pageTitle;
    }

    //Check login status on route change
    if (nextstate.data && nextstate.data.requiresLogin) {
      var token = store.get('userData') ? store.get('userData').token : null;

      if (!token || jwtHelper.isTokenExpired(token)) {
        e.preventDefault();
        console.log('Redirecting..');
        $state.go('app');
      }
    }
  });

});
