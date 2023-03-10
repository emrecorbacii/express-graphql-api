const User = require("./Objects/User");
const Hello = require("./Objects/Hello");
const Foo = require("./Objects/Foo");

const Query = () => {
	return {
		Hello(parent, args) {
			return Hello(parent, args);
		},
		Foo(parent, args) {
			return Foo(parent, args);
		},
		User(parent, args) {
			return User(parent, args);
		},
	};
};

module.exports = Query;
