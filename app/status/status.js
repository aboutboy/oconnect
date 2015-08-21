'use strict';
angular.module('status', [
  'ngCordova',
  'ui.router',
  'ngMaterial',
  'angular-storage'
])
  .config(function ($stateProvider) {

    console.log('Allo! Allo from your module: ' + 'status');

    // some basic routing
    $stateProvider
      .state('app.status', {
        url: '/status',
        templateUrl : 'status/templates/status.html',
        controller: 'StatusCtrl'
      })
  });
