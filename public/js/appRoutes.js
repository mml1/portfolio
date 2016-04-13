angular.module("appRoutes",[]).config(function($routeProvider){
	$routeProvider
	.when("/project", {
		templateUrl:"views/project.html"

	})
	.otherwise({
		templateUrl: "views/home.html"
	})	
});