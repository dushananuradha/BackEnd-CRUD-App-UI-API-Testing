import express from "express";
import PlayerOperations from "../services/playerOperations.js";

const playerOps = new PlayerOperations();

function playerAPIRoutes() {
  const router = express.Router();

  router.post("/createPlayer", playerOps.createPlayer);
  router.get("/getAllPlayers", playerOps.getAllPlayers);
  router.get("/getPlayerByID/:playerID", playerOps.getPlayerByID);
  router.put("/updatePlayer/:playerID", playerOps.updatePlayer);
  router.delete("/deletePlayer/:playerID", playerOps.deletePlayer);
  return router;
}

export default playerAPIRoutes;
