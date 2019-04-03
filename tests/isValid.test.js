const isValid = require("../src/isValid");
const isInvalid = require("../src/isInvalid");

describe("A valid address", function () {
	it("is exactly one item and has a 'Verified' verification status.", function () {
		const verifiedAddress = [{
			analysis: {
				verificationStatus: "Verified",
			},
		}];

		expect(isValid(verifiedAddress)).toEqual(true);
		expect(isInvalid(verifiedAddress)).toEqual(false);
	});

	it("is exactly one item and has a 'Partial' verification status.", function () {
		const verifiedAddress = [{
			analysis: {
				verificationStatus: "Partial",
			},
		}];

		expect(isValid(verifiedAddress)).toEqual(true);
		expect(isInvalid(verifiedAddress)).toEqual(false);
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

		expect(isValid(dpvY)).toEqual(true);
		expect(isValid(dpvN)).toEqual(false);
		expect(isInvalid(dpvY)).toEqual(false);
		expect(isInvalid(dpvN)).toEqual(true);
	});
});