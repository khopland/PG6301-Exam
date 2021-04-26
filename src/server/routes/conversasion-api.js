const express = require("express");
const { getMessages,getAllMessages} = require("../db/messages");

const router = express.Router();

router.post("/messages", async (req, res) => {
  if (!req.session.userinfo) return res.send(401);
  const { recipients } = req.body;
  const messages = getMessages(recipients.sort());
  return res.status(200).json(messages);
});

router.get("/messages/all", async (req, res) => {
  if (!req.session.userinfo) return res.send(401);
  const messages = getAllMessages(req.session.userinfo.email);
  return res.status(200).json(messages);
});

module.exports = router;
