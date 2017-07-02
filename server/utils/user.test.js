var expect = require('expect');

var {generateUser} = require('./user');

describe('generateUser', () => {
	it('should generate a correct user object', () => {
		var userName = 'testy';
		var email = 'testy@test.com';

		var testUser = generateUser(userName, email);

		expect(testUser).toInclude({userName, email});
		expect(testUser.createdAt).toBeA('number');
	});
});