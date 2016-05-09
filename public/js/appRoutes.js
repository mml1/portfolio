angular.module("appRoutes",[]).config(function($routeProvider){
	$routeProvider
	.when("/project/:id", {
		templateUrl:"views/project.html"
	})
	.when("/projects", {
		templateUrl:"views/newproject.html"
	})
	.otherwise({
		templateUrl: "views/home.html"
	})	
});