'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

 // News Controller

 .controller('MyNewsCtrl', ["$scope",function($scope) {
     $scope.newsitems=7;
  }])

  // Events Controller

  .controller('MyTasksCtrl', ["$scope",function($scope) {
     $scope.events=3;
  }]);