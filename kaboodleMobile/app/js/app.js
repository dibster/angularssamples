'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters',
                         'myApp.services',
                         'myApp.directives',
                         'kaboodle.News.controllers',
                         'kaboodle.Events.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/News', {templateUrl: 'partials/partial1.html', controller: 'MyNewsCtrl'});
    $routeProvider.when('/Events', {templateUrl: 'partials/partial2.html', controller: 'MyEventsCtrl'});
    $routeProvider.otherwise({redirectTo: '/News'});
  }]);
