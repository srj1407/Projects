const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const data = req.body;
  const parsedData = createTodo.safeParse(data);
  if (!parsedData.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs.",
    });
    return;
  }

  await todo.create({
    title: data.title,
    description: data.description,
    completed: false,
  });

  res.json({ msg: "Todo created" });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find();
  res.json({ todos });
});

app.put("/completed", async function (req, res) {
  const data = req.body;
  const parsedData = updateTodo.safeParse(data);
  if (!parsedData.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs.",
    });
    return;
  }
  await todo.updateOne(
    { _id: req.body.id },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, function () {
  console.log("Server is connected.");
});
