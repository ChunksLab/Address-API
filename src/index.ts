import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import countryRoute from "./api/v1/address/country/country.route";
import stateRoute from "./api/v1/address/state/state.route";
import cityRoute from "./api/v1/address/city/city.route";
import logger from "morgan";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");

const allowedOrigins = [
  'https://craftluna.net',
  'http://localhost:' + port,
];

app.use(cors({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.set("trust proxy", 1);
app.use(express.json());
app.use(logger("tiny"));

app.use("/api/v1/address/country", countryRoute);
app.use("/api/v1/address/state", stateRoute);
app.use("/api/v1/address/city", cityRoute);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("could not connect to mongo!");
    console.log(err.message);
  });