angular.module("remindMesCtrl",[]).controller("RemindMesController", function($scope, $routeParams, ProjectFactory){

	$scope.myInterval = 3000;
  	$scope.slides = [
  		{id:0,image: "../../img/remindme/first.png"},
  		{id:1,image: "../../img/remindme/dash.png"},
  		{id:2,image: "../../img/remindme/tasks.png"}
  	];
});