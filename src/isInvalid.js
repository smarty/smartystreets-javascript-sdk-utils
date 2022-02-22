function isInvalid ({result}) {
	const noResults = result.length === 0 || !result[0].analysis;

	if (noResults) {
		return true;
	}

	const verificationStatus = result[0].analysis.verificationStatus;
	const dpvMatchCode = result[0].analysis.dpvMatchCode;
	const addressPrecision = result[0].analysis.addressPrecision;

	const exactlyOneResult = result.length === 1;
	const addressPrecisionIsPreciseEnough = addressPrecision && addressPrecision !== "Premise" && addressPrecision !== "DeliveryPoint";
	const verificationStatusIsNone = verificationStatus === "None";
	const dpvMatchCodeIsN = dpvMatchCode === "N";
	const undefinedDpvMatchCodeAndVerificationStatus = verificationStatus === undefined && dpvMatchCode === undefined;
	const addressIsAtLeastPartiallyVerified = verificationStatus === "Verified" || verificationStatus === "Partial";
	const addressIsConfirmedInSomeWay = dpvMatchCode !== "N";

	if (exactlyOneResult) {
		if (result[0].analysis.enhancedMatch) {
			const enhancedMatch = result[0].analysis.enhancedMatch.split(",");
			return enhancedMatch.includes("none");
		}
		else if (verificationStatusIsNone) return true;
		else if (addressPrecisionIsPreciseEnough) return true;
		else if (dpvMatchCodeIsN) return true;
		else if (undefinedDpvMatchCodeAndVerificationStatus) return true;
		else return !addressIsAtLeastPartiallyVerified && !addressIsConfirmedInSomeWay;
	}

	return false;
}

module.exports = isInvalid;