function isMissingSecondary (result) {
	const atLeastOneResult = result.length > 0;
	const n1DPVFootnotePresent = result[0].analysis.dpvFootnotes.includes("N1");
	const r1DPVFootnotePresent = result[0].analysis.dpvFootnotes.includes("R1");

	return atLeastOneResult && (n1DPVFootnotePresent);
}

module.exports = isMissingSecondary;