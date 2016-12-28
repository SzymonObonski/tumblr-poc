import angular from 'angular';
import getService from './resource.service'
let resourceModule = angular.module('resource', [])
  .config(() => {
    "ngInject";
  })
  .service('getService', getService)
  .name;

export default resourceModule;
