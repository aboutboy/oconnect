'use strict';
angular.module('main').controller('MainCtrl', function ($scope, $mdSidenav, store) {
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.appName = 'oConnect';

  if (!store.get('host')) {
    store.set('host', '192.168.1.1');
  }
});
