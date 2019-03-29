const chai = require("chai");
const expect = chai.expect;
const isAmbiguous = require("../src/isAmbiguous");

describe("An ambiguous address", function () {
	it("has more than one address", function () {
		const ambiguousAddress = [{}, {}];

		expect(isAmbiguous(ambiguousAddress)).to.equal(true);
	});
});