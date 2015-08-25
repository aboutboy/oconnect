/*
@name OpenWRT Luci JSON-RPC API Service for Angular.js
@author Sabbir Ahmed <mail@thesabbir.com>
 */

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
    },
    opkg: function (func, params) {
      return $http({
        method: 'POST',
        url: baseUrl + '/ipkg',
        data: {
          'method': func,
          'params': params
        }
      });
    },
    fs: function (func, params) {
      return $http({
        method: 'POST',
        url: baseUrl + '/fs',
        data: {
          'method': func,
          'params': params
        }
      });
    }
    //TODO: uci service
  };
}).factory('httpRequestInterceptor', function (store) {
  return {
    request: function (config) {
      //Authentication Interceptor
      if (config.method === 'POST') {
        config.headers['Content-Type'] = undefined;

        //Get token stored by angular-storage
        if (store.get('token')) {

          //Add it is a get paramet in URL
          config.url = config.url + '?auth=' + store.get('token');
        }
      }
      return config;
    }
  };
}).config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
