var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.post('/getContact', function (req, res, next) {

  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;


  console.log("req.body.name: ", name);
  console.log("req.body.email: ", email);
  console.log("req.body.subject: ", subject);
  console.log("req.body.message: ", message);

  request({
    "url": "http://learningofthefuture.net/contact-form.php",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
      },
    body: "name="+name+"&email="+email+"&subject"+subject+"&message="+message

  }, function(error, response, body){
      if(error) {
            res.send(error);
      } else {
            console.log("body: ", body);
            res.send(body);
      }
  });
});

app.listen(process.env.PORT || 8080);
