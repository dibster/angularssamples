/**
 * Created with JetBrains WebStorm.
 * User: dave
 * Date: 20/09/13
 * Time: 10:15
 * To change this template use File | Settings | File Templates.
 */
angular.module('kaboodle.News.controllers', []);
angular.module('kaboodle.News.controllers').controller('MyNewsCtrl',

    function ($scope) {

        $scope.news = [
            {person: 'josh', news: "Document for dev machine in progress, VPN still not working from India. Made some changes together. Will do some airlines work today together as well", reply: false},
            {person: 'lemmy', news: "Project Vrief Has been updated so I want to have a quick call to discuss", reply: false},
            {person: 'kate', news: "f you don't even have a website yet, and are here merely to look for tips on making one, you ", reply: true},
            {person: 'kate', news: "IThe above CSS trick works for things like bibliographies and footnotes where the hanging indent is part of the same paragraph as the rest of the text. However, if you only want the first line to be hanging, and a separate paragraph below to be indented, HTML already provides a built-in facility to do this. You don't need to resort to CSS sleight-of-hand to produce the effect", reply: true},
            {person: 'morrissey', news: "The above code produces the example that you see at the start of the article. You should of course change the number of pixels to one that best suits your purpose; that is, you do not have to use the same number as I did. Just try out different values till you get the effect you want.", reply: false},
            {person: 'kate', news: "f you don't even have a website yet, and are here merely to look for tips on making one, you ", reply: true},
            {person: 'kate', news: "Now that the entire paragraph appears to be flushed towards the right, we need to make the first line start from the original left margi", reply: true}
        ];

        $scope.getTotalNews = function () {
            return $scope.news.length;
        };

        $scope.addNews = function () {
            $scope.news.unshift({person: $scope.thisUser, news: $scope.formNewsText, reply: false});
            $scope.formNewsText = "";

        };
    });










