'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    beforeEach(module('kaboodle.News.controllers'));

    // Tasks Controller
      var ctrl, scope;
      beforeEach(inject(function($controller, $rootScope) {
        //sets the new rootscope in the global variable pool
        scope = $rootScope.$new();
        ctrl = $controller("MyNewsCtrl", {
            $scope: scope
        });
      }));

    it('should return number of news items as 7', function() {
        expect(scope.getTotalNews()).toMatch(7);
    });

    it('first person returned should be called josh', function() {
        expect(scope.news[0].person).toMatch("josh");
        expect(scope.news[4].person).toMatch("morrissey");
    });

    it('sergey should be added to the list, the list will have 8 items now', function() {
        scope.formNewsText = "sergey";
        scope.addNews();
        expect(scope.getTotalNews()).toMatch(8);
    });

    it('sergey should be added to the top of the list', function() {
        scope.formNewsText = "NewsItem";
        scope.thisUser = "lukasz";
        scope.addNews();
        expect(scope.news[0].person).toMatch("lukasz");
    });
});
