angular.module("projectsCtrl",[]).controller("ProjectsController", function($scope, $routeParams, ProjectFactory){
	$scope.one = "";
	$scope.project = {};
	$scope.project.tech =[];

	ProjectFactory.index(function(projects){
		$scope.projects = projects;
	});

	//add a new project to my list of projects
	$scope.add = function(){
		console.log($scope.project)
		// ProjectFactory.create($scope.project);
	};

	//retriev a project from db
	$scope.retrieve = function(id){
		ProjectFactory.show(id, function(info){
			 $scope.one = info;
		});
	};
});