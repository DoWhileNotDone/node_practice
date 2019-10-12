var express = require('express');
var router = express.Router();

let leads = require('../controllers/leads');
/* GET leads listing. */
router.get('/leads', leads.get_leads);

router.get('/leads/:lead_id', leads.get_lead);

module.exports = router;
