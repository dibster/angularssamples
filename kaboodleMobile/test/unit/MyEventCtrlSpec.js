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
      it('should have 6 tasks', function() {
          expect('>>>   countthetests    <<<<<<').toMatch(6);
      })
});
