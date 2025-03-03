import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sport: String,
});

const createPlayerSchema = new mongoose.Schema(
    Object.fromEntries(
        Object.entries(playerSchema.obj).filter(([key]) => key !== 'id')
      )
);

const Player = mongoose.model("Player", playerSchema, "players_all_sports");
const CreatePlayer = mongoose.model("CreatePlayer", createPlayerSchema, "players_all_sports");

export { Player, CreatePlayer };


