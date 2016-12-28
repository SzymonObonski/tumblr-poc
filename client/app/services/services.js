import angular from 'angular';
import Resource from './resource/resource';
import HttpAuth from './interceptor/interceptor';
let serviceModule = angular.module('app.services', [
  Resource,
  HttpAuth
])
.name;

export default serviceModule;
