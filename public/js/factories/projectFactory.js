angular.module("projectFactory", []).factory("ProjectFactory", function($http){
	// var factory = {};
	// var projects = [];

	// //retrieve all project info
	// factory.index = function(callback){
	// 	$http.get("/projects").success(function(info){
	// 		callback(info);
	// 	});
	// };

	// //create a new project record
	// factory.create = function(info){
	// 	$http.post("/projects", info).success(function(){		
	// 	});
	// };

	// //display one project info
	// factory.show = function(id, callback){
	// 	$http.get("/projects/" + id).success(function(pInfo){
	// 		callback(pInfo);
	// 	});	
	// };
	return factory;
});