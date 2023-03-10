const mongoose = require("mongoose");
require("dotenv").config();

//MongoDB
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
	if (!uri) {
		console.log({ MongoDB: "No URI" });
		return;
	}

	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoose.connection.on("open", () => {
		console.log({ MongoDB: "Connected" });
	});

	mongoose.connection.on("error", (err) => {
		console.log("MongoDB:Failed => ", err);
	});
};

module.exports = connectDB;
