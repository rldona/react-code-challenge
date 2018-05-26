'use strict';

const http   = require('http');

const chai   = require('chai');
const path   = require('path');
const expect = chai.expect;

chai.should();

const Server = require(path.join(__dirname, '..', '../server/src/server'));

describe('# Server', function() {

  let server;
  let app;

  before(function() {
    app = Server.init();
  });

  after(function () {
    app.server.close();
  });

  it('should exist Server function', function() {
    expect(Server).to.exist;
  });

  it('should exist init method', function() {
    expect(Server.init()).to.exist;
  });

});