const yaml = require('js-yaml');

module.exports = {
	serialize: (json) => {
		return new Promise((resolve, reject) => {
			try {
				const text = yaml.safeDump(json);
				resolve(text);
			} catch(e) {
				reject(e);
			}
		});
	},
	deserialize: (text) => {
		return new Promise((resolve, reject) => {
			try {
				const json = yaml.safeLoad(text);
				resolve(json);
			} catch(e) {
				reject(e);
			}
		});
	},
};