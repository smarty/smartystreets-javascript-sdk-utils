function isValid (result) {
	const verificationStatus = result[0].analysis.verificationStatus;

	const exactlyOneResult = result.length === 1;
	const addressIsAtLeastPartiallyVerified = verificationStatus === "Verified" || verificationStatus === "Partial";
	const addressIsConfirmedInSomeWay = result[0].analysis.dpvMatchCode !== "N";

	return exactlyOneResult && (addressIsAtLeastPartiallyVerified || addressIsConfirmedInSomeWay);
}

module.exports = isValid;