const express = require('express');
const router = express.Router();
const { collection } = require('../configure/db')

// GET all posts
router.get('/', async(req, res) => {
    const allImages = await collection.find().toArray();
    res.status(200);
    res.send(allImages);
});

module.exports = router;
