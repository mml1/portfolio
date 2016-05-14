angular.module("hungryBellysCtrl",[]).controller("HungryBellysController", function($scope, $routeParams, ProjectFactory){
	$scope.myInterval = 3000;
  	$scope.slides = [
  		{id:0,image: "../../img/memoryLane/initial.png"},
  		{id:1,image: "../../img/memoryLane/finished.png"},
  		{id:2,image: "../../img/memoryLane/single.png"},
  		{id:3,image: "../../img/memoryLane/topten.png"}

  	];
		
});