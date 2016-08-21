angular.module("appRoutes",[]).config(function($routeProvider){
	$routeProvider
	.when("/projects/memorylane", {
		templateUrl:"views/ml.html"
	})
	.when("/projects/remindme", {
		templateUrl:"views/rm.html"
	})
	.when("/projects/hungrybelly", {
		templateUrl:"views/hb.html"
	})
	.when("/projects/warningstories", {
		templateUrl:"views/at.html"
	})
	.when("/projects/nga", {
		templateUrl:"views/nga.html"
	})
	.when("/projects/iot", {
		templateUrl:"views/iot.html"
	})
	.otherwise({
		templateUrl: "views/home.html"
	})	
});