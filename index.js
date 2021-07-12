
const express = require('express');
const morgan = require('morgan');

let logger = morgan('short');
let app = express();

let blockRouter = require('./src/routes/blocks');

app.use(logger);
app.use('/block', blockRouter);

app.listen(3000);
