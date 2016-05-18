angular.module("warningSignsCtrl",[]).controller("WarningSignsController", function($scope, $routeParams, ProjectFactory){
	$scope.one = "";
	$scope.project = {};
	$scope.project.tech =[];


	$scope.myInterval = 3000;
  	$scope.slides = [
  		{id:0,image: "../../img/warningSigns/first.png"},
  		{id:1,image: "../../img/warningSigns/question.png"},
  		{id:2,image: "../../img/warningSigns/results.png"},
  		{id:3,image: "../../img/warningSigns/resources.png"}
  	];
});