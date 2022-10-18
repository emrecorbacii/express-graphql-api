const { ApolloServer } = require("apollo-server-express");
const { join } = require("node:path");

const { loadSchema } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

const { resolvers } = require("../graphql/resolvers/resolver");
require("dotenv").config();

const typeDefs = async () => {
	/* <Declaration of GraphQL Schemas> */
	const typeDefs = await loadSchema(
		join(__dirname, "../graphql/typeDefs/schema.graphql"),
		{
			loaders: [new GraphQLFileLoader()],
		}
	);
	return typeDefs;

	/* </ Declaration of GraphQL Schemas> */
};

/* <Declaration of ApolloServer> */
const createApolloServer = async (app) => {
	const server = new ApolloServer({
		typeDefs: await typeDefs(),
		resolvers: resolvers,
	});

	await server.start();

	server.applyMiddleware({ app });
	app.listen({ port: process.env.PORT }, () => {
		console.log("http://localhost:" + process.env.PORT);
	});
};
/* </ Declaration of ApolloServer> */

module.exports = createApolloServer;
