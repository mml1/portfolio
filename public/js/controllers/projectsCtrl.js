angular.module("projectsCtrl",[]).controller("ProjectsController", function($scope, $routeParams, ProjectFactory){
	$scope.one = "";
	$scope.project = {};
	$scope.project.tech =[];


	$scope.myInterval = 3000;
  	$scope.slides = [
  		{id:0,image: "http://localhost:8000/public/img/front.jpeg"},
  		{id:1,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png'}];

	ProjectFactory.index(function(projects){
		$scope.projects = projects;
	});
		
	// ProjectFactory.show($routeParams.id, function(info){
	// 	$scope.one = info;
	// });

	//add a new project to my list of projects
	$scope.add = function(){
		console.log($scope.project);
		// ProjectFactory.create($scope.project);
	};

	//retriev a project from db
	$scope.retrieve = function(id){
		ProjectFactory.show(id, function(info){
			console.log("fact");
			$scope.one = info;
		});
	};
});