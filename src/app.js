import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { CrateTodoList } from "./controllers/project-controllers.js";
import todoItemRouter from "./routes/todoItem-route.js";
import swaggerMiddlewear from "./middlwares/swagger-middleware.js";
import swaggerMiddleware from "./middlwares/swagger-middleware.js";

dotenv.config();
connect();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works" });
});

app.use("/api", todoItemRouter);

app.use("/", ...swaggerMiddleware);

app.listen(process.env.PORT || 3000);
