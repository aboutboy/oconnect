angular.module('login').controller('LoginCtrl', function ($scope, store, Owrt) {
  $scope.user = {
    name: "root",
    password: "notconnected"
  };

  $scope.login = function () {
    Owrt.loginService.login({} , function (res) {
      console.log(res);
    });
  }
});
