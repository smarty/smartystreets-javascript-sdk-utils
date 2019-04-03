function isInvalid ({result}) {
	const noResults = result.length === 0;

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

	return exactlyOneResult && (verificationStatusIsNone || addressPrecisionIsPreciseEnough || dpvMatchCodeIsN || undefinedDpvMatchCodeAndVerificationStatus || (!addressIsAtLeastPartiallyVerified && !addressIsConfirmedInSomeWay));
}

module.exports = isInvalid;