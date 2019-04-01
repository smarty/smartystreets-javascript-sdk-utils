const chai = require("chai");
const expect = chai.expect;
const isInvalid = require("../src/isInvalid");

describe("An invalid address", function () {
	it("is an empty result.", function () {
		const verifiedAddress = [];

		expect(isInvalid(verifiedAddress)).to.equal(true);
	});
});