import express, {Express} from "express";

const app: Express = express();
const port: string | number = process.env.PORT || 8080;

app.get("/", (request:Request, response:Response) => {
   response.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})