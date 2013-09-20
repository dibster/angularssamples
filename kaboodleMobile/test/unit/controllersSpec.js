'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    beforeEach(module('myApp.controllers'));


        // ****** Tasks Events


        var newsctrl, newsscope;
        beforeEach(inject(function($controller, $rootScope) {
            newsscope = $rootScope.$new();
            newsctrl = $controller("MyNewsCtrl", {
                $scope: newsscope
            });

        }));

        it('should return number of news items as 7', function() {
            expect(newsscope.newsitems).toMatch(7);
        });


        // *****************************************************  Events Tests


        var taskctrl, taskscope;
        beforeEach(inject(function($controller, $rootScope) {
          taskscope = $rootScope.$new();
          taskctrl = $controller("MyTasksCtrl", {
              $scope: taskscope
          });
        }));

        it('should return number of events as 3', function() {
            expect(taskscope.events).toMatch(3);
        });
});
