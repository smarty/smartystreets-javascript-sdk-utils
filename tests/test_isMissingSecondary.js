const chai = require("chai");
const expect = chai.expect;
const isMissingSecondary = require("../src/isMissingSecondary");

describe("An address missing a secondary number", function () {
	it("has at least 1 result", function () {
		const nonAmbiguous = [];

		expect(isMissingSecondary(nonAmbiguous)).to.equal(false);
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

		expect(isMissingSecondary(n1Address)).to.equal(true);
		expect(isMissingSecondary(r1Address)).to.equal(true);
		expect(isMissingSecondary(hSharpAddress)).to.equal(true);
		expect(isMissingSecondary(noQualifyingFootnotesPresent)).to.equal(false);
	});
});