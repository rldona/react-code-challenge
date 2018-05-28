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

  describe('GET: /phones', function() {
    it('should return 200', function (done) {
      http.get('http://localhost:3000/phones');
      done();
    });
  });

});
