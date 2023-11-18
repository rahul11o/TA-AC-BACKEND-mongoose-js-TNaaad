let express = require("express");
let mongoose = require("mongoose");
let Users = require("./models/users");
const users = require("./models/users");

mongoose.connect("mongodb://127.0.0.1:27017/sample");

// Event listener for successful connection
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected  ");
});

// Event listener for connection error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

let app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    let newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(501).json(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    let allUsers = await Users.find({});
    res.status(201).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
});

// app.get("/users/:id", async (req, res) => {
//   try {
//     let id = req.params.id;
//     let user = await Users.find({ _id: id });
//     res.status(201).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(501).json(error);
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     let id = req.params.id;
//     let user = await Users.findOne({ _id: id });
//     res.status(201).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(501).json(error);
//   }
// });

app.get("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await Users.findById(id);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedUser = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(501).json(err);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let deletedUser = await Users.findByIdAndDelete(id, req.body, {
      new: true,
    });
    res.status(201).json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(501).json(err);
  }
});

app.listen(5500, () => {
  console.log("server is running on port 5500");
});
