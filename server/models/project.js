var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProjectSchema = new mongoose.Schema({
	title: String,
	description: String,
	teamPlayers: String,
	date: String,
	tech: {type: String},
});
mongoose.model("Project", ProjectSchema);