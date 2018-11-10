// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const session = require("express-session");
// const dbConnection = require("./database");
// const MongoStore = require("connect-mongo")(session);
// const passport = require("./passport");
// const mongoose = require("mongoose");
// const routes = require("./server/routes");
// const app = express();
// const PORT = process.env.PORT || 3001;
// const user = require("./server/routes/user");
// // Define middleware here
// // MIDDLEWARE
// app.use(morgan("dev"));
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/globeTrotter");
// // Sessions
// app.use(
//   session({
//     secret: "toronto", //pick a random string to make the hash that is generated secure
//     store: new MongoStore({ mongooseConnection: dbConnection }),
//     resave: false, //required
//     saveUninitialized: false //required
//   })
// );
// // Passport
// app.use(passport.initialize());
// app.use(passport.session()); // calls the deserializeUser
// // Routes
// app.use("/user", user);

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
