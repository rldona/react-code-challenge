'use strict';

const http   = require('http');
const chai   = require('chai');
const path   = require('path');

const expect = chai.expect;
const assert = chai.assert;

const Server = require('../../src/server');
const Api    = require('../../src/api');

chai.should();

describe('# Api', function() {

  let server;
  let app;

  beforeEach(function() {
    app = Server.init();
  });

  afterEach(function () {
    app.server.close();
  });

  describe('GET: /zitycars/recharge/car2go/undefined/2017-04-15/2018-01-10/2/08:00/22:00', function() {
    it('should return 200', function (done) {
      http.get('http://localhost:3000/api/zitycars/recharge/car2go/undefined/2017-04-15/2018-01-10/2/08:00/22:00');
      done();
    });
  });

});
