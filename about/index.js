const express = require('express');
const router = express.Router();
// Routing untuk About Us
router.get('/', (req, res) => {
  res.send('Ini halaman About Us. Website ini dibuat oleh tim WAD03_TIMEXPLORER.');
});
module.exports = router;