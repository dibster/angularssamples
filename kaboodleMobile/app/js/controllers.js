'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyNewsCtrl', ["$scope",function($scope) {
     $scope.newsitems=7;
  }])
  .controller('MyTasksCtrl', [function() {

  }]);