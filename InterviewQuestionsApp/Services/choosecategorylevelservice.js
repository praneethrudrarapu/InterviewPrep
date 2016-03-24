/// <reference path="c:\users\prudrarapu\documents\visual studio 2013\Projects\InterviewQuestionsApp\InterviewQuestionsApp\Scripts/angular.min.js" />
/// <reference path="c:\users\prudrarapu\documents\visual studio 2013\Projects\InterviewQuestionsApp\InterviewQuestionsApp\Directives/InterviewQnsAppDir.js" />

(function(){
    var getCategories = function () {
        var categories = [
        { id: 1, subject: "c#" },
        { id: 2, subject: "ASP.NET" },
        { id: 3, subject: "MVC" },
        { id: 4, subject: "WCF" },
        ]

        var levels = [
            { id: 1, levelType: "Beginner" },
            { id: 2, levelType: "Intermediate" },
            {id: 3, levelType: "Expert"}
        ]
        return {
            categories: categories,
            levels: levels
        };
    };
    var module = angular.module("interviewQuestionsAppModule");
    module.factory("getCategories", getCategories);

}());
