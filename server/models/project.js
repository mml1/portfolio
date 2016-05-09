var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProjectSchema = new mongoose.Schema({
	title: String,
	description: String,
	teamPlayers: String,
	tech: [String],
});
mongoose.model("Project", ProjectSchema);