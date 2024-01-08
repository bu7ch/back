import Card from "../models/cardModel";

export const create = async (req, res) => {
  const dbCard = req.body;
  try {
    const newCard = await Card.create(dbCard);
    res.status(201).send(newCard);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const showCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error);
  }
};
