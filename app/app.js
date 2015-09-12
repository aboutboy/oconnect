'use strict';
angular.module('oc', [
  // your modules
  'main',
  'login',
  'status',
  'ui.router',
  'angular-storage'
]).config(function ($urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/login');

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
        e.preventDefault();
        console.log(token);
        console.log('Redirecting..');
        $state.go('app.login');
      }
    }
  });
});
