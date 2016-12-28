import angular from 'angular';
import Home from './home/home';
import Post from './post/post';
let componentModule = angular.module('app.components', [
  Home,
  Post
])

.name;

export default componentModule;
