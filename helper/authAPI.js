const jwt = require("../helper/jwt");
const { AuthenticationError } = require("apollo-server-express");
module.exports = async (data) => {
	const authKey = data.req.headers.auth;
	if (authKey == null) {
		throw new AuthenticationError("NO ACCESS TOKEN PROVIDED");
	} else if (authKey) {
		const decoded = await jwt.VerifyDev(authKey, "This is a secret dev");
		if (decoded == false) {
			throw new AuthenticationError("ACCESS TOKEN INVALID");
		} else {
			return {};
		}
	}
};
