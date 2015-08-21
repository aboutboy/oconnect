'use strict';
angular.module('oc', [
  // your modules
  'main',
  'login',
  'status',
  'ui.router',
  'angular-storage'
]).config(function ($urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/status');

}).run(function ($rootScope) {
  //Set page title on route change
  $rootScope.$on('$stateChangeStart', function (e, nextstate) {
    if (nextstate.data && nextstate.data.pageTitle) {
      $rootScope.pageTitle = nextstate.data.pageTitle;
    }

  });
});
