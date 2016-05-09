
var projects = require("./../controllers/projects.js");

module.exports = function(app){
	app.get("/projects", function(req, res){
		projects.index(req, res);
	});
	app.get("/projects/:id", function(req, res){
		projects.show(req, res);
	});
	app.post("/projects", function(req, res){
		projects.create(req, res);
	});
}