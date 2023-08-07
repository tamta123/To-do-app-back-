import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import todoItemRouter from "./routes/todoItem-route.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

dotenv.config();
connect();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", todoItemRouter);

app.use("/", ...swaggerMiddleware);

app.listen(process.env.PORT || 3000);
