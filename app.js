const express = require('express');

const router = require('./files');

const app = express();

app.listen(3000);

app.use(router);