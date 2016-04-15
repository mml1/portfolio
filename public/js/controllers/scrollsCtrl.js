angular.module("scrollsCtrl",[]).controller("ScrollsController",function($scope, $location, $anchorScroll){
	console.log("controller scrolls loaded")
	
	$scope.gotoTop = function(){
		console.log("in gotoTop")
		$location.hash("top");
		$anchorScroll();
	};
});
