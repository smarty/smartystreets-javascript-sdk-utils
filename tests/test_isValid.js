const chai = require("chai");
const expect = chai.expect;
const isValid = require("../src/isValid");

describe("A valid address", function () {
	it("is exactly one item and has a 'Verified' verification status.", function () {
		const verifiedAddress = [{
			analysis: {
				verificationStatus: "Verified",
			},
		}];

		expect(isValid(verifiedAddress)).to.equal(true);
	});

	it("is exactly one item and has a 'Partial' verification status.", function () {
		const verifiedAddress = [{
			analysis: {
				verificationStatus: "Partial",
			},
		}];

		expect(isValid(verifiedAddress)).to.equal(true);
	});

	it("is exactly one item and is confirmed in some way.", function () {
		const dpvY = [{
			analysis: {
				dpvMatchCode: "Y",
			},
		}];
		const dpvN = [{
			analysis: {
				dpvMatchCode: "N",
			},
		}];

		expect(isValid(dpvY)).to.equal(true);
		expect(isValid(dpvN)).to.equal(false);
	});
});