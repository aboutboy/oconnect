'use strict';
angular.module('login', [
  'ngCordova',
  'ui.router',
  'angular-storage'
])
  .config(function ($stateProvider) {

    console.log('Allo! Allo from your module: ' + 'login');

    // some basic routing
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/templates/login.html',
        controller: 'LoginCtrl',
        data: {
          pageTitle: 'Welcome'
        }
      })
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      });
  });

