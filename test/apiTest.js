// test.js

var app = require('../app');
var chai = require('chai');
chai.use(require('chai-dom'));
var expect = chai.expect;
var request = require('supertest');

describe('Our server', function() {
  // Called once before any of the tests in this block begin.
  before(function(done) {
    app.listen(function(err) {
      if (err) { return done(err); }
      done();
    });
  });

  it('index should send back a response with the landing page html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .expect(function(res) {
          console.log(res);
          expect(res.text).to.include('Lead Builder');
          expect(res.text).to.include('Manage Leads');
          //TODO: Expect Anchor Link
          //expect(document.querySelector('a')).should.have.text('Manage Leads');
      })
      .end(function(err, res) {
         if (err) return done(err);
         done();
       });
  });

});
