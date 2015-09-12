'use strict';
angular.module('login', [
  'ngCordova',
  'ui.router',
  'angular-storage',
  'openwrt'
])
  .config(function ($stateProvider) {

    console.log('Allo! Allo from your module: ' + 'login');

    // some basic routing
    $stateProvider
      .state('app.login', {
        url: '/login',
        templateUrl: 'login/templates/login.html',
        controller: 'LoginCtrl',
        data: {
          pageTitle: 'Welcome',
          requiresLogin: false
        }
      })
      .state('app.logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      });
  });

