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

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        //sets the new rootscope in the globalvariable pool
        scope = $rootScope.$new();
        ctrl = $controller("MyNewsCtrl", {
            $scope: scope
        });

    }));


    it('test controller fires', function() {
        expect(scope.newsitems).toMatch(7);
    });
});
