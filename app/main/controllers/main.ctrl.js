'use strict';
angular.module('main').controller('MainCtrl', function ($scope, $mdSidenav) {
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

});
