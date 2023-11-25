const express = require('express');
const router = express.Router();
const LifeStyle = require('../model/LifeStyle.model.js');

router.get("/lifeStyle", async (req, res) => {
    try {
        const articles = await LifeStyle.find({});
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;