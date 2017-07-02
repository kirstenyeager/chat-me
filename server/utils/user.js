var generateUser = (userName, email) => {
	return {
		userName,
		email,
		createdAt: new Date().getTime()
	};
};

module.exports = {generateUser};