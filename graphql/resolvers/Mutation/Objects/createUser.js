const createUser = (parent, args) => {
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
	return {
		Username,
		Password,
		Id,
		Status: 202,
	};
};

module.exports = createUser;
