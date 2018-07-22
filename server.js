// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");


var app = express();

// HEROKU or Local 
var PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REQUIRE ROUTES
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//SERVER IS LISTENING
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
