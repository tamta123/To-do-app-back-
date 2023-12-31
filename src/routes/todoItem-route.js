import express from "express";
import {
  crateTodoList,
  deleteCompletedItems,
  deleteItem,
  getList,
  todoUpdate,
} from "../controllers/project-controllers.js";

const todoItemRouter = express.Router();

todoItemRouter.post("/newItem", crateTodoList);

todoItemRouter.get("/items", getList);

todoItemRouter.put("/items/:id", todoUpdate);

todoItemRouter.delete("/items/completed", deleteCompletedItems);

todoItemRouter.delete("/items/:id", deleteItem);

export default todoItemRouter;
