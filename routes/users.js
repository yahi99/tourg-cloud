var express = require('express');
var router = express.Router();
const user_controller = require('../server/controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create user
router.post('/create_user', user_controller.create_user);

// add credit card to user
// TODO check if credit card exists ???
router.post('/add_credit_card', user_controller.add_credit_card);

module.exports = router;
