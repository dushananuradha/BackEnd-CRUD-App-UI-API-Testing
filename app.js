import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectToMongoDB} from "./src/configuration/dbConfig.js";
import playerAPIRoutes from "./src/routes/playerAPIRoutes.js";

/**
 * creates an instance of an Express application by calling the express function.
 * This app object represents your web application and provides methods for routing HTTP requests,
 * configuring middleware, rendering HTML views, registering a template engine,
 * and modifying application settings
 */

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const  apiRoutes = playerAPIRoutes();

connectToMongoDB().then(()=>{
  app.listen(PORT, () => {
    console.log("Hi, app listing on port: ", PORT);
  });
})


app.use(apiRoutes);
