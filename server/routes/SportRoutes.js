const express = require('express');
const router = express.Router();
const Sport = require('../model/Sport.model.js');

router.get("/sport", async (req, res) => {
    try {
        const articles = await Sport.find({});
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;