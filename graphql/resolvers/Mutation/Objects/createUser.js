const { pubsub } = require("../../Subscription");

const createUser = async (parent, args) => {
	// Do whatever..

	const Username = () => {
		return args.data.Username;
	};
	const Password = () => {
		return args.data.Password;
	};
	const Id = () => {
		return args.data.Id;
	};

	const user = {
		Username: Username(),
		Password: Password(),
		Id: Id(),
	};
	await pubsub.publish("USER_CREATED", {
		userCreated: user,
	});
	return user;
};

module.exports = createUser;
