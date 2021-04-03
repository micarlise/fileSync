const express = require('express');

const multer = require('multer');
const path = require('path');
const statFile = require('fs/promises').stat;

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

    const pathPrefix = path.join(__dirname, '../filestore');
    const fullPath = pathPrefix + '/' + req.params.blockId;

    statFile(fullPath)
    .then(() => {
        res.download(pathPrefix + '/' + req.params.blockId);
    }).catch(() => {
        res.status(404);
        res.end();
    });
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
