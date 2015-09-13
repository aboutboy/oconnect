'use strict';
angular.module('main', [
  'ngCordova',
  'ui.router',
  'ngMaterial',
  'angular-storage'
])
  .config(function ($stateProvider) {

    //routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'main/templates/sidebar.html',
        controller: 'MainCtrl',
        data: {
          pageTitle: 'Main',
          requiresLogin: true
        }
      });
  });
