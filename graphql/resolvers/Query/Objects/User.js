const User = (parent, args) => {
	const Username = () => {
		return "John Doe";
	};
	const Password = () => {
		return "321";
	};
	const Id = () => {
		return args.Id;
	};
	return {
		Username,
		Password,
		Id,
	};
};

module.exports = User;
