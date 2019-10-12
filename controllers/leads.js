const models = require('../models');

exports.get_leads = function(req, res, next) {
  models.Lead.findAll().then(function(leads) {
    res.render('leads', {
       leads: leads,
       title: 'Leads'
     });
  });
}

exports.get_lead = function(req, res, next) {
  models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
  }).then(function(lead) {
    res.render('lead', {
       lead: lead,
       title: 'Selected Lead'
     });
  });

  // models.Lead.findByPk(req.params.lead_id).then(function(lead) {
  //   res.render('lead', {
  //      lead: lead,
  //      title: 'Selected Lead'
  //    });
  // });
}
