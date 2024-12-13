import dotenv from 'dotenv';
import express, {Express} from "express";

dotenv.config();

const app: Express = express();


app.get("/", (request, response) => {
    response.send("Hello World!");
});

export default app;
