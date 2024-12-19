import dotenv from 'dotenv';
import express, {Express, NextFunction, Request, Response} from "express";
import noteRoutes from "./routes/note-route"
import morgan from "morgan";
import createHttpError, {isHttpError} from "http-errors";

dotenv.config();

const app: Express = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", noteRoutes);

// In the event that the user passes in an endpoint that doesn't exist, this will pass a HTTP 404 exception
app.use((request: Request, response: Response, nextFunction: NextFunction) => {
    nextFunction(createHttpError(404, "Exception Thrown"));
})

// Acts as a modular exception handler
app.use((error: unknown, request: Request, response: Response, nextFunction: NextFunction) => {

    let errorMessage: string = "Exception Thrown"
    let statusCode: number = 500;

    if (isHttpError(error)) {
        // Logs the exception to the terminal

        errorMessage = error.message;
        statusCode = error.statusCode;

        console.log(`Exception thrown: ${errorMessage}`);

        // Provides a JSON response to the user at the endpoint expressed above
        response.status(statusCode).json(
            {
                error: errorMessage,
                status: statusCode,
            }
        );

    }
});

export default app;
