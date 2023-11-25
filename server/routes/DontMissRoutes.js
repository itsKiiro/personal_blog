const express = require('express');
const router = express.Router();
const Article = require('../model/DontMiss.model.js');

router.get("/dont/miss", async (req, res) => {
    try {
        const articles = await Article.find({});
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;