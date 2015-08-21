'use strict';
angular.module('status').controller('StatusCtrl', function ($scope, Owrt) {
  $scope.status = {};
  $scope.status.device = {};
  Owrt.sys('sysinfo', []).success(function (res) {
    console.log(res.result);
    $scope.status.device.name = res.result[1];
    $scope.status.device.memory = res.result[2];
    $scope.status.device.free = res.result[5];

  });
  Owrt.sys('hostname', []).success(function (res) {
    console.log(res.result);
    $scope.status.hostname = res.result;
  });

  Owrt.sys('wifi.iwscan').success(function (res) {
    console.log(res.result);
    $scope.status.wireless = res.result;
  });
});
