import express from "express";
import Cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cardRouter from "./routes/cardsRoute";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`[DATABASE] MONGODB is connected !!`);
}
const port = process.env.PORT;
app.use(express.json());
app.use(Cors());
app.get("/", (req, res) => res.status(200).send("Welcome to the Social API"));

app.use("/dating/cards", cardRouter);
app.listen(port, () => console.log(`listening on localhost:${port}`));
