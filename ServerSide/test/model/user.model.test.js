var expect = require('chai').expect;

var User = require('../../models/user.model');

describe('user', function() {
   it('should be invalid if email is empty', function(done) {
	   var m = new User();

	   m.validate(function(err) {
		   expect(err.errors.error).to.exist;
		   done();
	   });
   });
});