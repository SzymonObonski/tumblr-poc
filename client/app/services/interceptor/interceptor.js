import angular from 'angular';
import HttpAuthService from './interceptor.service'
let interceptorModule = angular.module('HttpAuth', [])
  .config(($provide, $httpProvider) => {
    "ngInject";
    $provide.factory('authorizeInterceptor', HttpAuthService.httpAuthFactory);
    $httpProvider.interceptors.push('authorizeInterceptor');
  })
  .name;

export default interceptorModule;
