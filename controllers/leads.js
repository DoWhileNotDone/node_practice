const models = require('../models');

exports.get_all_leads = function(req, res, next) {
  models.Lead.findAll().then(function(leads) {
    res.render('leads_list', {
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
    res.render('lead_details', {
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

exports.show_create_form = function(req, res, next) {
  res.render('lead_create', {
    title: 'Add Lead Email' ,
    action: 'Create'
  });
}

exports.create_lead = function(req, res, next) {
  console.log("Lead email: ", req.body.lead_email);
  return models.Lead.create({
    email: req.body.lead_email,
  }).then(lead => {
    res.redirect("/leads");
  });
}

exports.show_update_form = function(req, res, next) {
  models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
  }).then(function(lead) {
    res.render('lead_edit', {
       lead: lead,
       title: 'Update Lead Email',
       action: 'Edit'
     });

  });
}

exports.update_lead = function(req, res, next) {
  models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
  }).then(function(lead) {
    lead.email = req.body.lead_email,
    lead.save().then(() => {
      res.redirect("/leads");
    });
  });
}
