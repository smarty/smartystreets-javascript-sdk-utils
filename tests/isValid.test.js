const isValid = require("../src/isValid");
const isInvalid = require("../src/isInvalid");

describe("A valid address", function () {
	it("is exactly one item and has a 'Verified' verification status.", function () {
		const verifiedAddress = {
			result: [{
				analysis: {
					verificationStatus: "Verified",
				},
			}],
		};

		expect(isValid(verifiedAddress)).toEqual(true);
		expect(isInvalid(verifiedAddress)).toEqual(false);
	});

	it("is exactly one item and has a 'Partial' verification status.", function () {
		const verifiedAddress = {
			result: [{
				analysis: {
					verificationStatus: "Partial",
				},
			}],
		};

		expect(isValid(verifiedAddress)).toEqual(true);
		expect(isInvalid(verifiedAddress)).toEqual(false);
	});

	it("is exactly one item and is confirmed in some way.", function () {
		const dpvY = {
			result: [{
				analysis: {
					dpvMatchCode: "Y",
				},
			}],
		};
		const dpvN = {
			result: [{
				analysis: {
					dpvMatchCode: "N",
				},
			}],
		};

		expect(isValid(dpvY)).toEqual(true);
		expect(isValid(dpvN)).toEqual(false);
		expect(isInvalid(dpvY)).toEqual(false);
		expect(isInvalid(dpvN)).toEqual(true);
	});

	it("is exactly one item and includes enhanced matching param.", function () {
		const enhancedMatchingOneResponse = {
			result: [{
				analysis: {
					enhancedMatch: "postal-match",
				},
			}],
		};
		const enhancedMatchingMultipleResponse = {
			result: [{
				analysis: {
					enhancedMatch: "postal-match,missing-secondary,unknown-secondary",
				},
			}],
		};

		expect(isValid(enhancedMatchingOneResponse)).toEqual(true);
		expect(isInvalid(enhancedMatchingOneResponse)).toEqual(false);
		expect(isInvalid(enhancedMatchingMultipleResponse)).toEqual(false);
	});
});