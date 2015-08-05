var https = require('../../chrome');
var assert = require('assert')

var req = https.request('https://encrypted.google.com/', function(res) {
  assert.equal(res.statusCode, 200, 'Status Code Test')
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    console.log(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});
