const express = require('express');
const multer = require('multer');
const Picture = require('../models/Picture');

const router = express.Router();

const upload = multer({ dest: './public/uploads/' });

router.post('/upload', upload.single('photo'), (req, res, next) => {
  const { name } = req.body;
  const { filename, originalname } = req.file;
  console.log(req.file);
  newPicture = new Picture({
    name,
    path: `/uploads/${filename}`,
    originalName: originalname,
  });

  newPicture.save(() => {
    res.redirect('/');
  });
});

module.exports = router;
