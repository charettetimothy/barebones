//import user model email 
//sign up, sing in post routes 
//post to sign up
//post to sign in
//get to check if authenticated
//get to logout
const router = require('express').Router()
var db = require("../../models");
 // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", function(req, res) {
    console.log(req.body.firstName)
    db.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      imgUrl: req.body.imgUrl
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });

  });

  // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     // The user is not logged in, send back an empty object
//     if (!req.user) {
//       res.json({});
//     } else {
//       res.json({
//         id: req.user.id,
//         firstName: req.user.firstName,
//         lastName: req.user.lastName,
//         email: req.user.email,
//         imgUrl: req.user.imgUrl,
//         createdAt: req.user.createdAt,
//         updatedAt: req.user.updatedAt
//       });
//     }
//   });

  module.exports = router