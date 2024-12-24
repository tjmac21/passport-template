var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  } else {
    res.redirect(process.env.FRONTEND_URL);
  }
});

module.exports = router;
