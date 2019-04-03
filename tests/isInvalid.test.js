const isInvalid = require("../src/isInvalid");
const isValid = require("../src/isValid");

describe("An invalid address", function () {
	it("is an empty result.", function () {
		const invalidAddress = {
			result: []
		};

		expect(isInvalid(invalidAddress)).toEqual(true);
		expect(isValid(invalidAddress)).toEqual(false);
	});

	it("is exactly one item and has a verification status of 'None'", function () {
		const invalidAddress = {
			result: [{
				analysis: {
					verificationStatus: "None",
				},
			}]
		};

		expect(isInvalid(invalidAddress)).toEqual(true);
		expect(isValid(invalidAddress)).toEqual(false);
	});

	it("is exactly one item and has a address precision is not 'Premise' or 'DeliveryPoint'.", function () {
		const invalidAddress = {
			result: [{
				analysis: {
					addressPrecision: "Not Premise or DeliveryPoint",
				},
			}]
		};

		const addressPrecisionPremise = {
			result: [{
				analysis: {
					addressPrecision: "Premise",
					dpvMatchCode: "foo",
				},
			}]
		};

		const addressPrecisionDeliveryPoint = {
			result: [{
				analysis: {
					addressPrecision: "DeliveryPoint",
					dpvMatchCode: "foo",
				},
			}]
		};

		expect(isInvalid(invalidAddress)).toEqual(true);
		expect(isInvalid(addressPrecisionPremise)).toEqual(false);
		expect(isInvalid(addressPrecisionDeliveryPoint)).toEqual(false);
		expect(isValid(invalidAddress)).toEqual(false);
	});

	it("is exactly one item and has a dpv match code of 'N'", function () {
		const invalidAddress = {
			result: [{
				analysis: {
					dpvMatchCode: "N",
				},
			}]
		};

		expect(isInvalid(invalidAddress)).toEqual(true);
		expect(isValid(invalidAddress)).toEqual(false);
	});

	it("is exactly one item and verification status and dpv match code are both undefined.", function () {
		const invalidAddress = {
			result: [{
				analysis: {
					dpvMatchCode: undefined,
					verificationStatus: undefined,
				},
			}]
		};

		expect(isInvalid(invalidAddress)).toEqual(true);
		expect(isValid(invalidAddress)).toEqual(false);
	});
});