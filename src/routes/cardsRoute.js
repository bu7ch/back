import { Router } from "express";
import { create, showCards } from "../controllers/cardController";

const cardRouter = Router();

cardRouter.get("/", showCards);
cardRouter.post("/", create);


export default cardRouter;