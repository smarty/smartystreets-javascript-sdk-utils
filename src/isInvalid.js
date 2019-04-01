function isInvalid (result) {
	const noResults = result.length === 0;
	const exactlyOneResult = result.length === 1;

	if (noResults) {
		return true;
	} else if (exactlyOneResult) {
		const addressPrecisionIsPreciseEnough = result[0].analysis.addressPrecision && result[0].analysis.addressPrecision !== "Premise" && result[0].analysis.addressPrecision !== "DeliveryPoint";
		const verificationStatusIsNone = result[0].analysis.verificationStatus === "None";
		const dpvMatchCodeIsN = result[0].analysis.dpvMatchCode === "N";

		if (verificationStatusIsNone || (addressPrecisionIsPreciseEnough || dpvMatchCodeIsN)) {
			return true;
		}
	}
	return false;
}

module.exports = isInvalid;