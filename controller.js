const User = require("./models/user.js")

module.exports = 
(req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registering user' });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.json({ success: 'User registered successfully' });
        });
      }
    });
  }