'use strict';

/**
 * @ngdoc overview
 * @name swdApp
 * @description
 * # swdApp
 *
 * Main module of the application.
 */
angular
  .module('dssApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
