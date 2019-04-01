
const chai = require("chai");
const expect = chai.expect;
const isInvalid = require("../src/isInvalid");
const isValid = require("../src/isValid");

describe("An invalid address", function () {
	it("is an empty result.", function () {
		const invalidAddress = [];

		expect(isInvalid(invalidAddress)).to.equal(true);
		expect(isValid(invalidAddress)).to.equal(false);
	});

	it("is exactly one item and has a verification status of 'None'", function () {
		const invalidAddress = [{
			analysis: {
				verificationStatus: "None",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
		expect(isValid(invalidAddress)).to.equal(false);
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
				dpvMatchCode: "foo",
			},
		}];

		const addressPrecisionDeliveryPoint = [{
			analysis: {
				addressPrecision: "DeliveryPoint",
				dpvMatchCode: "foo",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
		expect(isInvalid(addressPrecisionPremise)).to.equal(false);
		expect(isInvalid(addressPrecisionDeliveryPoint)).to.equal(false);
		expect(isValid(invalidAddress)).to.equal(false);
	});

	it("is exactly one item and has a dpv match code of 'N'", function () {
		const invalidAddress = [{
			analysis: {
				dpvMatchCode: "N",
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
		expect(isValid(invalidAddress)).to.equal(false);
	});

	it("is exactly one item and verification status and dpv match code are both undefined.", function () {
		const invalidAddress = [{
			analysis: {
				dpvMatchCode: undefined,
				verificationStatus: undefined,
			},
		}];

		expect(isInvalid(invalidAddress)).to.equal(true);
		expect(isValid(invalidAddress)).to.equal(false);
	});
});