var mongoose = require("mongoose");
var Project = mongoose.model("Project");

module.exports = (function(){
	return {
		index: function(req, res){
			Project.find({}, function(err, projects){
				if(err){
					console.log("db is empty");
				} else {
					res.json(projects);
				}
			});

		},
		show: function(req, res){
			Project.find({_id:req.params.id}, function(err, project){
				if(err){
					console.log(err, "could not find project");
				} else {
					res.json(project);
				}
			});

		},
		create: function(req, res){
			var project = new Project(req.body)
			Project.save(function(err){
				if(err){
					console.log(err, "error in creating on project");
				} else {
					res.redirect("/");
				}
			});

		},
	}
})();