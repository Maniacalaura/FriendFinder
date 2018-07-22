// LOAD DATA
var friends = require("../app/data/friends");

// ROUTING

module.exports = function(app) {
  // GET 

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // POST 
  app.post("/api/friends", function(req, res) {
      
    res.json(matchData(req.body));
    friends.push(req.body);
  });

  function matchData(userAnswers) {
    var arr = friends[0];
    var match = 0;
    for(var i = 0; i < friends[0].scores.length; i++) {
      var math = Math.abs(userAnswers.scores[i] - friends[0].scores[i]);

      match = match+math;
    }
    for(var i = 1; i < friends.length; i++) {
      var newMatch = 0;
      for(var e = 0; e < friends[i].scores.length; e++){
        var maths = Math.abs(userAnswers.scores[e] - friends[i].scores[e]);
        newMatch = newMatch+maths;
      }
      if (newMatch < match){
        match = newMatch;
        arr = friends[i];
      }
  }
  return arr;
}
};
