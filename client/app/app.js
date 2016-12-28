import angular from 'angular';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'normalize.css';
import htmlFilter from './common/htmlFilter/html.filter.js';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';

angular.module('app', [
    Services,
    Components,
    ngResource,
    ngSanitize
  ])
  .config(($locationProvider, $sceDelegateProvider, $qProvider) => {
    "ngInject";
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
    $qProvider.errorOnUnhandledRejections(false);
  })
  .component('app', AppComponent)
  .filter('to_html', ['$sce', htmlFilter]);
