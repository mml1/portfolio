angular.module("scrollsCtrl",[]).controller("ScrollsController",function($scope, $location, $anchorScroll, $document){
	console.log("controller scrolls loaded")

	// var top = 400;
 //    var duration = 2000; //milliseconds

 //    //Scroll to the exact position
 //    $document.scrollTop(top, duration).then(function() {
 //      console && console.log('You just scrolled to the top!');
 //    });

 //    var offset = 30; //pixels; adjust for floating menu, context etc
 //    //Scroll to #some-id with 30 px "padding"
 //    //Note: Use this in a directive, not with document.getElementById 
 //    var someElement = angular.element(document.getElementById('some-id'));
 //    $document.scrollToElement(someElement, offset, duration);
	// $scope.gotoTop = function(){
	// 	console.log("in gotoTop")
	// 	$location.hash("top");
	// 	$anchorScroll();
	// };
	// $scope.gotoPortfolio = function(){
	// 	console.log("in port")
	// 	$location.hash("port");
	// 	$anchorScroll();
	// };
	// $scope.gotoContact = function(){
	// 	console.log("contact")
	// 	$location.hash("contact");
	// 	$anchorScroll();
	// };
});
