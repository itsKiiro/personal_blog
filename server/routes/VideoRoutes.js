const express = require('express');
const router = express.Router();
const Video = require('../model/Video.model.js');

router.get("/video", async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;