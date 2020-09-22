const u = require('../models/user.model');


module.exports.posted = (req, res) =>{
  const userid = res.locals.uid;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const users = new u({
    uid : userid,
    usercart : req.body.usercart,
    useraddress: req.body.user,
    totalprice: req.body.Totalprice,
  });
  u.createuser(users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Done."
      });
    else res.send(res);
  });

};
module.exports.getted = (req, res) => {
  const userid = res.locals.uid;
  u.alldata(userid, (data,err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    }

    res.send(data);
  });
};

module.exports.admin = (req, res) => {
  u.ever( (data,err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    }

    res.send(data);
  });
};
