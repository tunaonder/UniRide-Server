
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello from private');
});


Parse.Cloud.define("pushToAll", function(request, response) {


  var pushQuery = new Parse.Query(Parse.Installation);
  // pushQuery.containedIn("deviceType", ["ios", "android"]); // errors if no iOS certificate

  // Send push notification to query
  Parse.Push.send({
    where: pushQuery, // Set our installation query
    data: {
      alert: 'Push test!!'
    }
  }, {
    success: function() {
      // Push was successful
      console.log("Message was sent successfully");
      response.success('true');
    },
    error: function(error) {
      response.error(error);
    },
    useMasterKey: true
  });
});
