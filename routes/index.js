const express = require("express");
const router = express.Router();
const TodoRouter = require("./todo.js")

router.use(TodoRouter)

module.exports = router;