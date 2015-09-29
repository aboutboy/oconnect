'use strict';
angular.module('main').controller('MainCtrl', function ($scope, $mdSidenav, store) {
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

  //Swipe event handlers
  $scope.showSidenav = function (menuId) {
    $mdSidenav(menuId).open();
  };
  $scope.hideSidenav = function (menuId) {
    $mdSidenav(menuId).close();
  };

});
