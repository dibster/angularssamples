'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ["$scope",function($scope) {
     $scope.newsitems=7;
  }])
  .controller('MyCtrl2', [function() {

  }]);