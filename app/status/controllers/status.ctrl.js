'use strict';
angular.module('status').controller('StatusCtrl', function ($scope, Owrt) {
  $scope.status = {};
  $scope.process = [];

  Owrt.rpc('sys', 'exec', ['ubus call system info'])
    .success(function (response) {
      $scope.status = JSON.parse(response.result);
      console.log($scope.status);
    });
  Owrt.rpc('sys', 'process.list', [])
    .success(function (response) {
      $scope.process = response.result;
      console.log(response.result);
    });
});
