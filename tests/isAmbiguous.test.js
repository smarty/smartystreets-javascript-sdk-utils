const isAmbiguous = require("../src/isAmbiguous");

describe("An ambiguous address", function () {
	it("has more than one address", function () {
		const ambiguousAddress = {
			result: [{}, {}]
		};

		expect(isAmbiguous(ambiguousAddress)).toEqual(true);
	});
});