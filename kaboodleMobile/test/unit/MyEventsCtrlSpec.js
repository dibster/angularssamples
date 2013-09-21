'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    beforeEach(module('kaboodle.Events.controllers'));

//    it('should ....', inject(function() {
//      //spec body
//    }));
//
//    it('should ....', inject(function() {
//        //spec body
//    }));

    // Tasks Controller
      var ctrl, scope;
      beforeEach(inject(function($controller, $rootScope) {
        //sets the new rootscope in the global variable pool
        scope = $rootScope.$new();
        ctrl = $controller("MyEventsCtrl", {
            $scope: scope
        });

      }));


      it('should return number of events as 7', function() {
          expect(scope.getTotalEvents()).toMatch(7);
      });
      it('should have 4 tasks', function() {

          // count the number of tasks

          var numberoftasks = 0;

          for(var i = 0; i < scope.events.length; i++)
          {
              if(scope.events[i].type == 'task')
              {
                  numberoftasks = numberoftasks + 1;
              }
          }
          expect(numberoftasks).toMatch(4);
      })
});
