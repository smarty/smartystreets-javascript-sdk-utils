const isInvalid = require("../src/isInvalid");

function isValid (result) {
	return !isInvalid(result);
}

module.exports = isValid;