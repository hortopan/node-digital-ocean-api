var DigitalOceanApi = require('./../');

describe('.DigitalOceanApi', function() {
  var init = false;

  beforeEach(function() {
    if (init === true){
      api = new DigitalOceanApi({token: 'jos', request: function(){}});
    }
  });

  describe('constructor', function() {

    after(function() {
      init = true;
    });

    it('Should construct', function() {
      var rqfx = function(){};
      var api = new DigitalOceanApi({
        token: 'jos',
        request: rqfx
      });
      api._token.should.equal('jos');
      api._request.should.equal(rqfx);
    });

    it('Should use request package if no request function given', function() {
      var api = new DigitalOceanApi({
        token: 'jos'
      });
      api._request.should.equal(require('./../lib/request'));
    });

  });

  describe('request', function() {

    it.skip('Should send to buildRequest', function() {

    });


    it('Must pass a request object to the request function', function(done) {
      api._request = function(request, cb) {
        request.method.should.equal('GET');
        request.headers['Content-Type'].should.equal('application/json');
        cb();
      };

      api.request({}, function() {
        done();
      });

    });

    it('If an error is returned, must turn it into a request_error', function(done) {
        var e = new Error('test error');
        api._request = function(request, cb) {
          cb(e);
        };
        api.request({}, function(error) {
          error.code.should.equal('request_error');
          error.original.should.equal(e);
          done();
        });
    });

    it.skip('Should return request implementation error', function() {

    });

    it.skip('Should parse the rate limit', function() {

    });

    it.skip('If the status code implies an internal server error, return an error', function(done) {

    });

  });

  describe.skip('_buildRequest', function() {

    it('Should return a request with only the uri argument', function() {

    });

    it('Should throw if no uri specified', function() {

    });

    it('Should add content-length headers', function() {

    });

    it('Should add authentication headers', function() {

    });

  });

});
