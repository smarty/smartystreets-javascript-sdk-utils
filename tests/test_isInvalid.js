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

	it("is exactly one item and has a address precision is not 'Premise' or 'DeliveryPoint'.", function () {
		const invalidAddress = [{
			analysis: {
				addressPrecision: "Not Premise or DeliveryPoint",
			},
		}];

		const addressPrecisionPremise = [{
			analysis: {
				addressPrecision: "Premise",
			},
		}];

		const addressPrecisionDeliveryPoint = [{
			analysis: {
				addressPrecision: "DeliveryPoint",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
		expect(isInvalid(addressPrecisionPremise)).to.equal(false);
		expect(isInvalid(addressPrecisionDeliveryPoint)).to.equal(false);
	});

	it("is exactly one item and has a dpv match code of 'N'", function () {
		const invalidAddress = [{
			analysis: {
				dpvMatchCode: "N",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
	});
});