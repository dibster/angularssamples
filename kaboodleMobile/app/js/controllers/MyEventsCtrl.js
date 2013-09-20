/**
 * Created with JetBrains WebStorm.
 * User: dave
 * Date: 20/09/13
 * Time: 10:15
 * To change this template use File | Settings | File Templates.
 */
angular.module('kaboodle.Events.controllers', []);
angular.module('kaboodle.Events.controllers').controller('MyEventsCtrl',

    function ($scope) {

        $scope.events = [
            {type: 'milestone', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Sep', day : '20',user: 'Dave',done: false},
            {type: 'task', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Sep', day : '24',user: 'Kevin',done: true},
            {type: 'milestone', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Sep', day : '28',user: 'Dave',done: false},
            {type: 'task', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Sep', day : '30',user: 'Dave',done: false},
            {type: 'task', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Oct', day : '2',user: 'Lee',done: false},
            {type: 'milestone', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Oct', day : '5',user: 'Dave',done: false},
            {type: 'task', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Oct', day : '11',user: 'Dave',done: false}
        ];

        $scope.getTotalEvents = function () {
            return $scope.events.length;
        };

        $scope.addEvent = function () {
            $scope.events.unshift({type: 'task', title: 'Kick Off Meeting', project : 'Stores Outsourcing', month : 'Sep', day : '20'});
//        $scope.formNewsText = "";

        };
    });










