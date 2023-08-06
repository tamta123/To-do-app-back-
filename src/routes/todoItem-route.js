import express from "express";
import { CrateTodoList } from "../controllers/project-controllers.js";

const todoItemRouter = express.Router();

todoItemRouter.post("/newItem", CrateTodoList);

export default todoItemRouter;
