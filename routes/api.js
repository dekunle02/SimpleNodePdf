const express = require('express');
const router = express.Router();
var fs = require('fs');
var pdf = require('html-pdf');
const path = require('path');
const rootDir = require('../util/path');

const studentList = [
    { first_name: 'Norphe', last_name: 'Oyeyiola', age: 27 },
    { first_name: 'Farouk', last_name: 'Adeleke', age: 12 },
]

router.get('/students', (req, res) => {
    res.status(200).json(studentList)
})


router.get('/receipt', (req, res) => {
    // const html = fs.readFileSync(path.join(rootDir, 'templates', 'receipt.html'), 'utf8');
    // pdf.create(html).toFile('out.pdf', function (err, res) {
    //     console.log(res.filename);
    // });
    const html = `<html><body><h1 style="color: blue;">Hello World!!</h1></body></html>`
    const fileName = 'student_receipt.pdf'
    const fileType = 'application/pdf'
    pdf.create(html).toBuffer(function (err, buffer) {
        res.writeHead(200, {
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Type': fileType,
        })
        res.end(buffer)
    })
    // res.status(200).json("Hello World!")
})

module.exports = router;

// https://www.npmjs.com/package/html-pdf?activeTab=readme
// https://stackoverflow.com/questions/45922074/node-express-js-download-file-from-memory-filename-must-be-a-string