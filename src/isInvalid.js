function isInvalid (result) {
	const noResults = result.length === 0;

	if (noResults) {
		return true;
	}

	const exactlyOneResult = result.length === 1;
	const addressPrecisionIsPreciseEnough = result[0].analysis.addressPrecision && result[0].analysis.addressPrecision !== "Premise" && result[0].analysis.addressPrecision !== "DeliveryPoint";
	const verificationStatusIsNone = result[0].analysis.verificationStatus === "None";
	const dpvMatchCodeIsN = result[0].analysis.dpvMatchCode === "N";
	const undefinedDpvMatchCodeAndVerificationStatus = result[0].analysis.verificationStatus === undefined && result[0].analysis.dpvMatchCode === undefined;

	return !!(exactlyOneResult && (verificationStatusIsNone || (addressPrecisionIsPreciseEnough || dpvMatchCodeIsN || undefinedDpvMatchCodeAndVerificationStatus)));

}

module.exports = isInvalid;