function isMissingSecondary ({result}) {
	const noResults = result.length === 0;

	if (noResults) {
		return false;
	}

	const enhancedMatchingResponse = result[0].analysis.enhanced_match;

	if (enhancedMatchingResponse) {
		const hasMissingSecondary = enhancedMatchingResponse.includes("missing-secondary");
		const hasUnknownSecondary = enhancedMatchingResponse.includes("unknown-secondary");

		return hasMissingSecondary || hasUnknownSecondary;
	}

	const n1DPVFootnotePresent = result[0].analysis.dpvFootnotes && result[0].analysis.dpvFootnotes.includes("N1");
	const r1DPVFootnotePresent = result[0].analysis.dpvFootnotes && result[0].analysis.dpvFootnotes.includes("R1");
	const hSharpFootnotePresent = result[0].analysis.footnotes && result[0].analysis.footnotes.includes("H#");

	return !!(n1DPVFootnotePresent || r1DPVFootnotePresent || hSharpFootnotePresent);
}

module.exports = isMissingSecondary;