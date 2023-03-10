const { ApolloServer } = require("apollo-server-express");
const { join } = require("node:path");
const { createServer } = require("http");

const { loadSchema } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { resolvers } = require("../graphql/resolvers/resolver");

const {
	ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");

const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");

const authAPI = require("../helper/authAPI");
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
	const schema = makeExecutableSchema({
		typeDefs: await typeDefs(),
		resolvers,
	});

	const httpServer = createServer(app); //* Create HTTP Server

	const wsServer = new WebSocketServer({
		server: httpServer, //* Create WebSocket Server
		path: "/graphql",
	});
	const serverCleanup = new useServer(
		{
			schema,
		},
		wsServer
	);

	const server = new ApolloServer({
		schema,
		debug: false,
		introspection: true, // Currently "true"
		context: authAPI, //* Load Authentication API
		plugins: [
			//* Proper shutdown for the HTTP server.
			ApolloServerPluginDrainHttpServer({ httpServer }),

			//* Proper shutdown for the WebSocket server.
			{
				async serverWillStart() {
					return {
						async drainServer() {
							await serverCleanup.dispose();
						},
					};
				},
			},
		],
	});

	await server.start();

	server.applyMiddleware({ app });

	httpServer.listen({ port: process.env.PORT }, () => {
		console.log(
			`Apollo Server on http://localhost:${process.env.PORT}/graphql`
		);
		console.log(`HTTP Server on http://localhost:${process.env.PORT}`);
		console.log(`WS Server on ws://localhost:${process.env.PORT}/graphql`);
	});
};
/* </ Declaration of ApolloServer> */

module.exports = createApolloServer;
