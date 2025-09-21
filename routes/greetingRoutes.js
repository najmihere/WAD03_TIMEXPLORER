const express = require('express');
const router = express.Router();

// Route : /greeting?name=Pebry
router.get('/greeting', (req, res) => {
  const name = req.query.name;
  if (name) {
    return res.send(`Hello ${name}`);
  }
  return res.send('Hello Guest');
});

module.exports = router;