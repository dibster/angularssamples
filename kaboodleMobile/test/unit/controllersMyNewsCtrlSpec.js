'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    beforeEach(module('myApp.controllers'));

    // Tasks Controller
      var taskctrl, taskscope;
      beforeEach(inject(function($controller, $rootScope) {
        //sets the new rootscope in the global variable pool
        taskscope = $rootScope.$new();
        taskctrl = $controller("MyNewsCtrl", {
            $scope: taskscope
        });
      }));

      it('should return number of news items as 7', function() {
          expect(taskscope.getTotalNews()).toMatch(7);
      });
});
