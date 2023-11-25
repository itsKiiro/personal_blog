const express = require('express');
const router = express.Router();
const Recent = require('../model/Recent.model.js');

router.get("/recent", async (req, res) => {
    try {
        const articles = await Recent.find({});
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;