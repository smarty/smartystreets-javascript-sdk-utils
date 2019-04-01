function isInvalid (result) {
	if (result.length === 0) {
		return true;
	} else if (result.length === 1 && result[0].analysis.verificationStatus === "None") {
		return true;
	}
	return false;
}

module.exports = isInvalid;