const User = (parent, args) => {
	const Username = () => {
		return "uskeche";
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
