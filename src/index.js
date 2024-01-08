import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    UseCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log(`[DATABASE] MONGODB is connected !!`);
}
const port = process.env.PORT;

app.get("/", (req, res) => res.status(200).send("Welcome to the Social API"));

app.listen(port, () => console.log(`listening on localhost:${port}`));
