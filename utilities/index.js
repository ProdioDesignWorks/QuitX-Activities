const is = require('is');
const fs = require('fs');

exports.isDefined = value => is.defined(value);
exports.isEmpty = value => is.empty(value);
exports.isNull = value => is.nil(value);
exports.writeFs = (fp, data = {}) => fs.writeFileSync(fp, JSON.stringify(data, null, 2));