const chai = require("chai");
const expect = chai.expect;
const isMissingSecondary = require("../src/isMissingSecondary");

describe("An address missing a secondary number", function () {
	it("fill in this", function () {
		const missingSecondaryAddress = [{}, {}];

		expect(isMissingSecondary(missingSecondaryAddress)).to.equal(true);
	});
});