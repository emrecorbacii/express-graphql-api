const subscribe = async (pubsub) => {
	const asyncIterator = pubsub.asyncIterator(["USER_CREATED"]);

	return asyncIterator;
};

const userCreated = (pubsub) => {
	return subscribe(pubsub);
};

module.exports = userCreated;
