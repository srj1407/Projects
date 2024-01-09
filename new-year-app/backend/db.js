const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shashwatraj1407:OKU390ZP0wfNBFvM@cluster0.ohsmezb.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
