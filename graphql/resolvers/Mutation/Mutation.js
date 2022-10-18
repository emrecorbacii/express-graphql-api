const createUser = require("./Objects/createUser");

const Mutation = () => {
	return {
		createUser(parent, args) {
			return createUser(parent, args);
		},
	};
};

module.exports = Mutation;
