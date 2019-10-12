var express = require('express');
var router = express.Router();

let leads = require('../controllers/leads');
/* GET leads listing. */
router.get('/leads', leads.get_leads);

module.exports = router;
