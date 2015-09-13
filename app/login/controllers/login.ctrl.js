'use strict';
angular.module('login').controller('LoginCtrl', function ($scope, store, Owrt, $state) {
  $scope.user = {};
  $scope.host = store.get('host');

  $scope.login = function () {
    //store host name
    store.set('host', $scope.host);
    console.log(store.get('host'));

    if (!$scope.user.name && !$scope.user.pasword) {
      console.log('Credentials invalid?');
      return false;
    }

    Owrt.rpc('auth', 'login', [$scope.user.name, $scope.user.password]).success(function (res) {
      console.log(res);
      if (!res.error) {
        store.set('token', res.result);
        $state.go('app.status');
      }
    });
  };
});
