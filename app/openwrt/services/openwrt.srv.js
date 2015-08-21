angular.module('openwrt').factory('Owrt',function ($resource) {
  var baseUrl = 'http://192.168.1.1/cgi-bin/luci/rpc/auth';
  return {
    loginService : $resource(baseUrl, {"method":"login","params":["root","notconnected"]},  {'login': { method:'POST', headers: { 'Content-Type': 'application/json' } }})
  }
});
