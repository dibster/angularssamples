'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    beforeEach(module('myApp.controllers'));

//    it('should ....', inject(function() {
//      //spec body
//    }));
//
//    it('should ....', inject(function() {
//        //spec body
//    }));


    var newsctrl, newsscope;
    beforeEach(inject(function($controller, $rootScope) {
        //sets the new rootscope in the global variable pool
        newsscope = $rootScope.$new();
        newsctrl = $controller("MyNewsCtrl", {
            $scope: newsscope
        });

    }));

    it('test controller fires', function() {
        expect(newsscope.newsitems).toMatch(7);
    });

    // Tasks Controller
      var taskctrl, taskscope;
      beforeEach(inject(function($controller, $rootScope) {
        //sets the new rootscope in the global variable pool
        taskscope = $rootScope.$new();
        taskctrl = $controller("MyTasksCtrl", {
            $scope: taskscope
        });

      }));


      it('should return number of events as 3', function() {
          expect(taskscope.events).toMatch(3);
      });
});
