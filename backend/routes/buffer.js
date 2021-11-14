const router = require('express').Router();
let Buffer = require('../models/buffer.model');

router.route('/').get((req, res) => {
  Buffer.find()
    .then(buffer => res.json(buffer))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;