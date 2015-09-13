'use strict';
angular.module('main').controller('MainCtrl', function ($scope, $mdSidenav, store) {
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

  // Setting up a default host
  if (!store.get('host')) {
    store.set('host', '192.168.1.1');
  }

  //Swipe event handlers
  $scope.showSidenav = function (menuId) {
    $mdSidenav(menuId).open();
  };
  $scope.hideSidenav = function (menuId) {
    $mdSidenav(menuId).close();
  };

});
