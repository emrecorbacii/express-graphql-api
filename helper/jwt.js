const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.GenerateDev = async (dev) => {
	return jwt.sign(
		{
			dev,
		},
		process.env.GENERATE_DEV_SECRET
	);
};

module.exports.VerifyDev = async (token, secret) => {
	try {
		return jwt.verify(token, secret);
	} catch (err) {
		return false;
	}
};
