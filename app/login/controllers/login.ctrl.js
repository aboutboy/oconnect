'use strict';
angular.module('login').controller('LoginCtrl', function ($scope, store, Owrt, $state) {
  $scope.user = {
    name: 'root',
    password: 'notconnected'
  };

  $scope.login = function () {
    Owrt.login($scope.user).success(function (res) {
      console.log(res);
      if (!res.error) {
        store.set('token', res.result);
        $state.go('app.status');
      }
    });
  };
});
