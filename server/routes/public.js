var express = require("express");
var router = express.Router()
var Users = require("../database/userSchema")
var upload = require("../bin/mediaHelper")

router.get("/allUser", (req, res) => {
  Users.find({}, (err, data) => {
    if (err) {
      return res.status(500).send(err)

    } else {
      return res.send(data)
    }
  })
})




router.get("/user/:username", (req, res) => {
  uname = req.params.username
  Users.findOne({ username: uname }, (err, data) => {
    if (err) {
      return res.status(500).send(err)

    } else {

      if (data && data.private === false) {
        return res.send(
          data
        )
      } else {
        res.send({
          _id: data._id,
          name: data.name,
          username: data.username,
          bio: data.bio,
        })
      }

    }
  })
})




module.exports = router;