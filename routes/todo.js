const express = require("express");
const router = express.Router();
const TodoController = require ("../controllers/todoControllers.js")

router.get("/todo", TodoController.findAll);
router.get("/todo/:id", TodoController.findOne);
router.post("/todo", TodoController.create);
router.delete("/todo/:id", TodoController.destroy);
module.exports = router;