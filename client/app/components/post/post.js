import angular from 'angular';
import postComponent from './post.component';

let postModule = angular.module('post', [])
  .config(() => {
    "ngInject";
  })
  .component('post', postComponent)
  .name;

export default postModule;
