angular.module("appRoutes",[]).config(function($routeProvider){
	$routeProvider
	.when("/project/:id", {
		templateUrl:"views/project.html"
	})
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
	.otherwise({
		templateUrl: "views/home.html"
	})	
});