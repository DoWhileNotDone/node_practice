var express = require('express');
var router = express.Router();

let leads = require('../controllers/leads');
/* GET leads listing. */
router.get('/leads', leads.get_all_leads);
router.get('/leads/:lead_id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', leads.get_lead);

/* Create leads listing. */
router.get('/leads/new', leads.show_create_form);
router.post('/leads/new', leads.create_lead);

/* Update leads listing. */
router.get('/leads/:lead_id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/edit', leads.show_update_form);
router.post('/leads/:lead_id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/edit', leads.update_lead);

module.exports = router;
