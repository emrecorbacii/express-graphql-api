const jwt = require("../helper/jwt");
require("dotenv").config();

const { AuthenticationError } = require("apollo-server-express");
module.exports = async (data) => {
	const authKey = data.req.headers.auth;
	if (authKey == null) {
		throw new AuthenticationError("NO ACCESS TOKEN PROVIDED");
	} else if (authKey) {
		const decoded = await jwt.VerifyDev(
			authKey,
			process.env.GENERATE_DEV_SECRET
		);
		if (decoded == false) {
			throw new AuthenticationError("ACCESS TOKEN INVALID");
		} else {
			return {};
		}
	}
};
