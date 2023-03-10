const userCreated = require("./Objects/userCreated");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();
const Subscription = {
	userCreated: {
		subscribe: () => userCreated(pubsub),
	},
};
module.exports = { Subscription, pubsub };
