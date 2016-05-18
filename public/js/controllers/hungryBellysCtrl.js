angular.module("hungryBellysCtrl",[]).controller("HungryBellysController", function($scope, $routeParams, ProjectFactory){
	$scope.myInterval = 3000;
  	$scope.slides = [
  		{id:0,image: "../../img/hungryBelly/first.png"},
  		{id:1,image: "../../img/hungryBelly/findFriends.png"},
  		{id:2,image: "../../img/hungryBelly/fill.png"},
  		{id:3,image: "../../img/hungryBelly/edit.png"},
  		{id:4,image: "../../img/hungryBelly/map.png"} 		
  	];
		
});