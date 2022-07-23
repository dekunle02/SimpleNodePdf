if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const path = require('path');
const express = require('express');
const port = 2000;
const app = express();
const cors = require('cors');
const rootDir = require("./util/path")

var approvedOrigins = ['http://localhost:3000', 'http://127.0.0.1:8000']
if (process.env.DEVELOPMENT_MODE !== 'True') {
    approvedOrigins = ['*',]
}

var corsOptions = {
    origin: approvedOrigins,
    optionsSuccessStatus: 200
}

const adminRoutes = require("./routes/admin");
const schoolRoutes = require("./routes/school");
const apiRoutes = require("./routes/api");


app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded());

app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);
app.use(schoolRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))

})

app.listen(port, () => {
    console.log('Example app listening on port ' + port.toString())
})