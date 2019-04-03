const isMissingSecondary = require("../src/isMissingSecondary");

describe("An address missing a secondary number", function () {
	it("has at least 1 result", function () {
		const nonAmbiguous = [];

		expect(isMissingSecondary(nonAmbiguous)).toEqual(false);
	});

	it("is indicated with 'N1' or 'R1' dpv footnotes, or by 'H#' in the footnotes.", function () {
		const n1Address = [{
			analysis: {
				dpvFootnotes: "N1",
			},
		}];
		const r1Address = [{
			analysis: {
				dpvFootnotes: "R1",
			},
		}];
		const hSharpAddress = [{
			analysis: {
				footnotes: "H#",
			},
		}];
		const noQualifyingFootnotesPresent = [{
			analysis: {}
		}];

		expect(isMissingSecondary(n1Address)).toEqual(true);
		expect(isMissingSecondary(r1Address)).toEqual(true);
		expect(isMissingSecondary(hSharpAddress)).toEqual(true);
		expect(isMissingSecondary(noQualifyingFootnotesPresent)).toEqual(false);
	});
});