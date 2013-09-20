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

    it('first person returned should be called josh', function() {
        expect(taskscope.news[0].person).toMatch("josh");
        expect(taskscope.news[4].person).toMatch("morrissey");
    });

    it('sergey should be added to the list, the list will have 8 items now', function() {
        taskscope.formNewsText = "sergey";
        taskscope.addNews();
        expect(taskscope.getTotalNews()).toMatch(8);
    });

    it('sergey should be added to the top of the list', function() {
        taskscope.formNewsText = "NewsItem";
        taskscope.thisUser = "lukasz";
        taskscope.addNews();
        expect(taskscope.news[0].person).toMatch("lukasz");
    });
});
