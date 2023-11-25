const express = require('express');
const router = express.Router();
const Ad = require('../model/Ad.model.js');

router.get("/ad", async (req, res) => {
    try {
        const ads = await Ad.find({});
        res.json(ads);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;