import dotenv from 'dotenv';
import express, {Request, Response, Express, NextFunction} from "express";
import noteRoutes from "./routes/note-route"
import pino, {Logger} from "pino";

dotenv.config();

const logger: Logger = pino({})

const app: Express = express();

app.use("/api/notes", noteRoutes);

// In the event that the user passes in an endpoint that doesn't exist, this will pass a HTTP 404 exception
app.use((request: Request, response: Response, nextFunction: NextFunction) => {
    response.status(404).json(
        {
            error: "Page Not Found: HTTP 404",
            status: 404,
        }
    );
})

// Acts as a modular exception handler
app.use((error: unknown, request: Request, response: Response, nextFunction: NextFunction) => {
    if (error instanceof Error) {
        // Logs the exception to the terminal
        logger.error(`Exception thrown: ${error.message}`);

        // Provides a JSON response to the user at the endpoint expressed above
        response.status(500).json(
            {
                error: error.message,
                status: 500,
            }
        );
    }
});

export default app;
