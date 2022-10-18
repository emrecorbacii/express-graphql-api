const Query = require("./Query/Query")();
const Mutation = require("./Mutation/Mutation")();

const resolvers = {
	Query,
	Mutation,
};

module.exports = { resolvers };
