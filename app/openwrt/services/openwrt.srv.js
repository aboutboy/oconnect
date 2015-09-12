/*
 @name OpenWRT Luci JSON-RPC API Service for Angular.js
 @author Sabbir Ahmed <mail@thesabbir.com>
 */

'use strict';
angular.module('openwrt').factory('Owrt', function ($http, store) {
  var baseUrl = store.get('host');

  if(!(/^htt(p|ps):\/\//).test(baseUrl))
  {
     baseUrl = 'http://' + baseUrl;
  }

  var rpc = function (module) {
    //Check if hostname contains http:// url scheme

      return baseUrl + '/cgi-bin/luci/rpc/' + module;

  };

  return {
    rpc: function (module, func, params) {
      return $http({
        method: 'POST',
        url: rpc(module),
        data: {
          'method': func,
          'params': params
        }
      });
    }
    //TODO: uci service
  };
}).factory('httpRequestInterceptor', function (store, $q) {
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
    },
    responseError: function (rejection) {
      if (rejection.status === 403) {
        store.set('token', null);
      }

      return $q.reject(rejection);
    }

  };
}).config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
