import dotenv from 'dotenv';
import express, {Express} from "express";

dotenv.config();

const app: Express = express();

// Creates the end point "/"
// The same logic can be used to create any endpoint required
app.get("/", (request, response) => {
    response.send("Hello World!");
});

export default app;
