import { Player, CreatePlayer } from "../models/playerModel.js";

class PlayerOperations {
  async createPlayer(req, res) {
    try {
      const newPlayer = new CreatePlayer({
        name: req.body.name,
        sport: req.body.sport,
        country: req.body.country,
        profile: req.body.profile,
        currentStatus: req.body.currentStatus
      });
      const createdPlayer = await newPlayer.save();
      console.log(createdPlayer);
      res.status(201).json(createdPlayer);
    } catch (err) {
      console.error("Error creating player:", err);
      res.status(500).json({ err: "Failed to create player" });
    }
  }

  async getAllPlayers(req, res) {
    try {
      const dataAllPlayers = await Player.find({});
      console.log(dataAllPlayers);
      res.json(dataAllPlayers);
    } catch (err) {
      console.error("Error retrieving all players:", err);
      res.status(500).json({ error: err.message });
    }
  }

  async getPlayerByID(req, res) {
    const searchPlayer = req.params.playerID;
    try {
      const dataPlayer = await Player.findById(searchPlayer);
      if (!dataPlayer) {
        console.error('Player not exist. Recheck queried playerID');
        return res.status(404).json({ error: "Player not found" });
      }
      console.log(dataPlayer);
      res.status(201).json(dataPlayer);
    } catch (err) {
      console.error('Error retrieving searched player', err);
      return res.status(500).json({ error: "Player not found" });
    }

  }
  async updatePlayer(req, res) {
    const playerToEdit = req.params.playerID;
    try {
      const updatedPlayer = await Player.findByIdAndUpdate(
        playerToEdit,
        {
          name: req.body.name,
          sport: req.body.sport,
          country: req.body.country,
          profile: req.body.profile,
          currentStatus: req.body.currentStatus
        },
        { new: true }
      );
      if (!updatedPlayer) {
        return res.status(404).json({ error: "Player not found" });
      }
      console.log("Player updated successfully:", updatedPlayer);
      res.status(200).json(updatedPlayer);
    } catch (err) {
      console.error("Error updating player:", err);
      res.status(500).json({ error: "Failed to update player" });
    }
  }

  async deletePlayer(req, res) {
    const playerToDelete = req.params.playerID;
    try {
      const deletedPlayer = await Player.findByIdAndDelete(playerToDelete);
      if (!deletedPlayer) {
        return res.status(404).json({ error: "Player not found" });
      }
      console.log("Player deleted successfully: ", deletedPlayer);
      res.status(200).json(deletedPlayer);
    } catch (err) {
      console.error("Error deleting player:", err);
      res.status(500).json({ err: "Failed to delete player" });
    }

  }

}

export default PlayerOperations;
