const db = require("../config/connection");
const { Task, User } = require("../models");
const taskSeeds = require("./taskSeeds.json");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  await Task.deleteMany({});
  await Task.create(taskSeeds);

  await User.deleteMany({});
  await User.create(userSeeds);

  console.log("all done!");
  process.exit(0);
});
