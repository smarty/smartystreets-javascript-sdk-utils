function isInvalid (result) {
	const noResults = result.length === 0;
	const exactlyOneResult = result.length === 1;

	if (noResults) {
		return true;
	} else if (exactlyOneResult) {
		const verificationStatus = result[0].analysis.verificationStatus;
		const addressPrecision = result[0].analysis.addressPrecision;

		if (verificationStatus === "None" || addressPrecision === "None") {
			return true;
		}
	}
	return false;
}

module.exports = isInvalid;