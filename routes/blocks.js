const express = require('express');

const multer = require('multer');
const path = require('path');

const blockStorage = require('../utils/filestore');

function uploadBlock(req, res) {

    if (! req.file || !req.file.filename ) {
        res.status(404);
        res.end();
        return;
    }

    res.status(200);
    res.end();
}

function downloadBlock(req, res) {

    let pathPrefix = path.join(__dirname, '../filestore');
    res.download(pathPrefix + '/' + req.params.blockId);
}

let upload = multer({
    storage: blockStorage.storage
});

let blockRouter = express.Router();

blockRouter.get('/:blockId', downloadBlock);
blockRouter.post('/:blockId', 
    upload.single('block'),
    uploadBlock
);

module.exports = blockRouter;
