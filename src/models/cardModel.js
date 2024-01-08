import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
  name: String,
  imgUrl: String,
});

const Card = mongoose.model("card", cardSchema);
export default Card;
