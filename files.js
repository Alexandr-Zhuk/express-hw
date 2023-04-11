const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/:file', (req, res) => {
    let reqFile = req.params.file;
    
    fs.access(`./down-files/${reqFile}`, fs.constants.F_OK, (err) => {
        if (err){
            res.end('404 page - file not found');
        } else {
            res.sendFile(path.join(__dirname, '/down-files/' + reqFile));  
            
        }
    });
   
});

module.exports = router;