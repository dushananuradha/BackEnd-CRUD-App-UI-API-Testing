import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  sport: { type: String, required: true },
  country: { type: String, required: true },
  profile: { type: String, required: true },
  currentStatus: { type: Boolean, required: true }
});

const createPlayerSchema = new mongoose.Schema(
    Object.fromEntries(
        Object.entries(playerSchema.obj).filter(([key]) => key !== 'id')
      )
);

const Player = mongoose.model("Player", playerSchema, "players_all_sports");
const CreatePlayer = mongoose.model("CreatePlayer", createPlayerSchema, "players_all_sports");

export { Player, CreatePlayer };


