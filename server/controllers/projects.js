var mongoose = require("mongoose");
var Project = mongoose.model("Project");

module.exports = (function(){
	return {
		index: function(req, res){
			Project.find({}, function(err, projects){
				if(err){
					console.log("db is empty")
				} else {
					res.json(projects);
				}
			});

		},
	}
})();