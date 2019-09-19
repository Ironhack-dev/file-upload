const express = require('express');
const Picture = require('../models/Picture');

const router = express.Router();

router.use('/', require('./picture.routes'));
/* GET home page */
router.get('/', (req, res, next) => {
  Picture.find()
    .then((pictures) => {
      res.render('index', { pictures });
    })
    .catch(error => next(error));
});

module.exports = router;
