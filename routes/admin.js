const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.post('/add-student', (req, res, next) => {
    console.log('request body =>', req.body);
    res.redirect('/')
})

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'))
})

module.exports = router;