const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		Hello: String
		Foo: String
		User(Id: String): User!
	}

	type User {
		Username: String
		Password: String
		Id: String
	}
`;

module.exports = { typeDefs };
