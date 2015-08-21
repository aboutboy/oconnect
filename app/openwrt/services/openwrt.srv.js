'use strict';
angular.module('openwrt').factory('Owrt', function ($http) {
  var baseUrl = 'http://192.168.1.1/cgi-bin/luci/rpc';
  return {
    login: function (data) {
      return $http({
        method: 'POST',
        url: baseUrl + '/auth',
        data: {
          'method': 'login',
          'params': [data.name, data.password]
        }
      });
    },
    sys: function (func, params) {
      return $http({
        method: 'POST',
        url: baseUrl + '/sys',
        data: {
          'method': func,
          'params': params
        }
      });
    }
  };
}).factory('httpRequestInterceptor', function (store) {
  return {
    request: function (config) {
      if (config.method === 'POST') {
        config.headers['Content-Type'] = undefined;
        if (store.get('token')) {
          config.url = config.url + '?auth=' + store.get('token');
        }
      }
      return config;
    }
  };
}).config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
