
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello from private');
});


Parse.Cloud.define("pushToAll2", function(request, response) {

  // With promises
Parse.Push.send({
  where: { "deviceType": {
              "$in": [
                "ios",
                "android"
              ]}},
  data: { "title": "Nurannnnnn",
            "alert": "Nuriye Nabersadsdasdaasdasdasd" }
}, 
{
 useMasterKey: true })
.then(function() {
  // Push sent!
  response.success('senddd');
}, function(error) {
  // There was a problem :(
    response.error("change4");
});


  
});
