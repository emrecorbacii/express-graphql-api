const mongoose = require("mongoose");
require("dotenv").config();

//MongoDB
const uri =
	"mongodb+srv://" +
	process.env.MONGODB_ADMIN +
	":" +
	process.env.MONGODB_PASSWORD +
	"@purpl0.coe0i.mongodb.net/movieapp?retryWrites=true&w=majority";

const connectDB = async () => {
	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoose.connection.on("open", () => {
		console.log("MongoDB:Connected");
	});

	mongoose.connection.on("error", (err) => {
		console.log("MongoDB:Failed", err);
	});
};

module.exports = connectDB;
