const express = require("express");
const router = express.Router();
const jwt = require("../helper/jwt");
/* GET home page. */
require("dotenv").config();
router.get("/", (req, res, next) => {
	res.json({
		title: "Express-Restful Routes",
		graphql: "http://localhost:3001/graphql",
	});
});

router.get("/gql/:pass/:dev", async (req, res, next) => {
	const { pass, dev } = req.params;

	if (pass !== process.env.GENERATE_DEV_PASSWORD) {
		res.json({ error: "INVALID PASSWORD" });
	} else {
		const token = await jwt.GenerateDev(dev);
		res.json({ token });
	}
});

module.exports = router;
