angular.module('login').controller('LogoutCtrl', function (store, $state) {
  store.set('token', null);
  $state.go('app.login');
});
