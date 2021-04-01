const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../filestore'));
    },
    filename: function(req, file, cb) {
        cb(null, req.params.blockId);
    }
});

module.exports = { storage }
