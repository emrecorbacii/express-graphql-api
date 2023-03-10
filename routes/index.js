const express = require("express");
const router = express.Router();
const jwt = require("../helper/jwt");
/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({
		title: "Express-Restful Routes",
		graphql: "http://localhost:3001/graphql",
	});
});

router.get("/gql", async (req, res, next) => {
	const { key } = req.query;
	if (key !== "key") {
		res.json({ error: "INVALID KEY" });
	} else {
		const token = await jwt.GenerateDev("key");
		res.json({ token });
	}
});

module.exports = router;
