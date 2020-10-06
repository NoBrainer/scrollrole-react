const express = require('express');
const router = express.Router();
const yaml = require('../common/yaml');
const {logger} = require('../common/logger');

/* POST JSON string to serialize into YAML */
router.get('/serialize', (req, res, next) => {
	//TODO: change from GET to POST
	//TODO: check for bad requests and such
	yaml.serialize(req.body)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			logger.error(error.message);
			res.status(500).json({
				error: error.message,
			});
		});
});

/* POST YAML string to deserialize into JSON */
router.get('/deserialize', (req, res, next) => {
	//TODO: change from GET to POST
	//TODO: check for bad requests and such
	yaml.deserialize(req.body)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			logger.error(error.message);
			res.status(500).json({
				error: error.message,
			});
		});
});

module.exports = router