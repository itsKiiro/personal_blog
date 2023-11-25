const express = require('express');
const router = express.Router();
const Entertainment = require('../model/Entertainment.model.js');

router.get("/entertainment", async (req, res) => {
    try {
        const articles = await Entertainment.find({});
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;