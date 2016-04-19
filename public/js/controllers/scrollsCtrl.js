angular.module("scrollsCtrl",[]).controller("ScrollsController",function($scope, $location, $anchorScroll){
	console.log("controller scrolls loaded")
	
	$scope.gotoTop = function(){
		console.log("in gotoTop")
		$location.hash("top");
		$anchorScroll();
	};
	$scope.gotoPortfolio = function(){
		console.log("in port")
		$location.hash("port");
		$anchorScroll();
	};
	$scope.gotoContact = function(){
		console.log("contact")
		$location.hash("contact");
		$anchorScroll();
	};
});
