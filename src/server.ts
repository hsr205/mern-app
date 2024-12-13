import express, {Express} from "express";
import dotenv from 'dotenv';

dotenv.config({path: `../.env`});

const app: Express = express();
const port: string | number = process.env.DEFAULT_PORT_NUM || 8080;

app.get("/", (request, response) => {
   response.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})