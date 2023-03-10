const jwt = require("jsonwebtoken");

module.exports.GenerateDev = async (data) => {
	return jwt.sign(
		{
			data,
		},
		"This is a secret dev"
	);
};

module.exports.VerifyDev = async (token, key) => {
	try {
		const data = jwt.verify(token, key);
		return data;
	} catch (err) {
		return false;
	}
};
