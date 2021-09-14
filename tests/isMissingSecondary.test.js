const isMissingSecondary = require("../src/isMissingSecondary");

describe("An address missing a secondary number", function () {
	it("has at least 1 result", function () {
		const nonAmbiguous = {
			result: [],
		};

		expect(isMissingSecondary(nonAmbiguous)).toEqual(false);
	});

	it("is indicated with 'N1' or 'R1' dpv footnotes, or by 'H#' in the footnotes.", function () {
		const n1Address = {
			result: [{
				analysis: {
					dpvFootnotes: "N1",
				},
			}],
		};
		const r1Address = {
			result: [{
				analysis: {
					dpvFootnotes: "R1",
				},
			}],
		};
		const hSharpAddress = {
			result: [{
				analysis: {
					footnotes: "H#",
				},
			}],
		};
		const noQualifyingFootnotesPresent = {
			result: [{
				analysis: {},
			}],
		};

		expect(isMissingSecondary(n1Address)).toEqual(true);
		expect(isMissingSecondary(r1Address)).toEqual(true);
		expect(isMissingSecondary(hSharpAddress)).toEqual(true);
		expect(isMissingSecondary(noQualifyingFootnotesPresent)).toEqual(false);
	});

	it("is using enhanced matching", function () {
		const secondaryIsReturned = {
			result: [{
				analysis: {
					enhanced_match: "postal-match",
				},
			}],
		};

		const noSecondary = {
			result: [{
				analysis: {
					enhanced_match: "unknown-secondary",
				},
			}],
		};

		expect(isMissingSecondary(secondaryIsReturned)).toEqual(false);
		expect(isMissingSecondary(noSecondary)).toEqual(true);
	});
});