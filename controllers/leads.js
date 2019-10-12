const models = require('../models');


exports.get_leads = function(req, res, next) {
  models.Lead.findAll().then(function(leads) {
    res.render('leads', {
       leads: leads,
       title: 'Leads' 
     });
  });
}
