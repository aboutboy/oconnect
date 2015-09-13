describe('Main Module', function() {

  beforeEach(module('main'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    Ma = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  it('should be oConnect', function () {
    expect("oConnect").toEqual('oConnect');
  });
});
