const isInvalid = require("../src/isInvalid");

function isValid (lookup) {
	return !isInvalid(lookup);
}

module.exports = isValid;