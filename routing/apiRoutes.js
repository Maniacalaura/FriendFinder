
// LOAD DATA
var friends = require("../app/data/friends");

// ROUTING

module.exports = function(app) {
  // GET 

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // POST 
  app.post("/api/survey", function(req, res) {
      console.log(res);

  });

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
//     console.log(friends);
//   });
};
