require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const key = process.env.KEY_DB;
const app = express();
app.use(express.json());
const port = 3333;

mongoose.connect(
  `mongodb+srv://guimodev:${key}@invincible-api.bkuda.mongodb.net/?retryWrites=true&w=majority&appName=invincible-api`
);

const Character = mongoose.model("Character", {
  name: String,
  alter_ego: String,
});

app.get("/", async (req, res) => {
  const characters = await Character.find();
  res.send(characters);
});

app.post("/character", async (req, res) => {
  const character = new Character({
    name: req.body.name,
    alter_ego: req.body.alter_ego,
  });

  await character.save();
  res.send(character);
});

app.put("/character/:id", async (req, res) => {
  const character = await Character.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      alter_ego: req.body.alter_ego,
    },
    {
      new: true,
    }
  );
  res.send(character);
});

app.delete("/character/:id", async (req, res) => {
  const character = await Character.findByIdAndDelete(req.params.id);
  res.send(character);
});

app.listen(port, () => {
  console.log(`**Aplication litstening on port ${port}**`);
});
