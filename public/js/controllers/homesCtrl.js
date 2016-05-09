angular.module("homesCtrl",[]).controller("HomesController", function($scope, $routeParams, HomeFactory, ProjectFactory){
	ProjectFactory.index(function(projects){
		$scope.projects = projects;
	});
});