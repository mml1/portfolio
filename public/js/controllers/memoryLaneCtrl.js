angular.module("memoryLanesCtrl",[]).controller("MemoryLanesController", function($scope, $routeParams, ProjectFactory){
	$scope.one = "";
	$scope.project = {};
	$scope.project.tech =[];


	$scope.myInterval = 3000;
  	$scope.slides = [
  		{id:0,image: "../../img/memoryLane/initial.png"},
  		{id:1,image: "../../img/memoryLane/finished.png"},
  		{id:2,image: "../../img/memoryLane/single.png"},
  		{id:3,image: "../../img/memoryLane/topten.png"}

  	];

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