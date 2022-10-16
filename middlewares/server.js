const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

/* <Declaration of GraphQL Schemas> */
const { typeDefs } = require("../graphql/typeDefs");
const { resolvers } = require("../graphql/resolvers/resolver");
/* </ Declaration of GraphQL Schemas> */

const server = new ApolloServer({ typeDefs, resolvers });

/* <Declaration of ApolloServer> */
const createApolloServer = async (app) => {
	await server.start();

	server.applyMiddleware({ app });
	app.listen({ port: process.env.PORT }, () => {
		console.log("http://localhost:" + process.env.PORT);
	});
};
/* </ Declaration of ApolloServer> */

module.exports = createApolloServer;
