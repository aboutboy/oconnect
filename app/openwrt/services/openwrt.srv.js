/*
 @name OpenWRT Luci JSON-RPC API Service for Angular.js
 @author Sabbir Ahmed <mail@thesabbir.com>
 */

'use strict';
angular.module('openwrt').factory('Owrt', function ($http, store) {

  //Check if hostname contains http:// url scheme

  var rpc = function (module) {
    var baseUrl = store.get('host');
    //Check if host name contains any protocol
    if (!(/^htt(p|ps):\/\//).test(baseUrl)) {
      baseUrl = 'http://' + baseUrl;
    }
    console.log(module, ' on ',baseUrl);
    return baseUrl + '/cgi-bin/luci/rpc/' + module;
  };

  return {
    //RPC service via Owrt.rpc()
    rpc: function (module, func, params) {
      return $http({
        method: 'POST',
        url: rpc(module),
        data: {
          "jsonrpc": "2.0",
          'id' : Date.now(),
          'method': func,
          'params': params
        }
      });
    }
  };
}).factory('httpRequestInterceptor', function (store, $q) {
  return {
    request: function (config) {
      //Authentication Interceptor
      if (config.method === 'POST') {
        config.headers['Content-Type'] = undefined;

        //Get token stored by angular-storage
        if (store.get('token')) {

          //Add it is a get parameter in URL
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
