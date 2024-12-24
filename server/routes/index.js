var express = require('express');
var router = express.Router();
const logger = require('morgan')('combined');
/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('GET /');
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  } else {
    res.redirect(process.env.FRONTEND_URL);
  }
});

module.exports = router;
