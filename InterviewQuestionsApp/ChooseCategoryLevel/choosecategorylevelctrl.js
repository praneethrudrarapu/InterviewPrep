
/// <reference path="c:\users\prudrarapu\documents\visual studio 2013\Projects\InterviewQuestionsApp\InterviewQuestionsApp\Directives/InterviewQnsAppDir.js" />
/// <reference path="c:\users\prudrarapu\documents\visual studio 2013\Projects\InterviewQuestionsApp\InterviewQuestionsApp\Services/choosecategorylevelservice.js" />

(function () {
    interviewQuestionsApp.controller("choosecategorylevelctrl", function ($scope, getCategories) {
        $scope.categories = getCategories.categories;
        $scope.levels = getCategories.levels;
    });
}());