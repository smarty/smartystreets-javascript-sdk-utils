const chai = require("chai");
const expect = chai.expect;
const isInvalid = require("../src/isInvalid");

describe("An invalid address", function () {
	it("is an empty result.", function () {
		const invalidAddress = [];

		expect(isInvalid(invalidAddress)).to.equal(true);
	});

	it("is exactly one item and has a verification status of 'None'", function () {
		const invalidAddress = [{
			analysis: {
				verificationStatus: "None",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
	});

	it("is exactly one item and has a address precision of 'None'", function () {
		const invalidAddress = [{
			analysis: {
				addressPrecision: "None",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
	});
});