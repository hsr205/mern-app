import dotenv from 'dotenv';
dotenv.config();

import env from "./util/validateEnv";
import app from "./app";
import pino, {Logger} from 'pino';
import mongoose from "mongoose";

const port: number = env.DEFAULT_PORT_NUM;
const logger: Logger = pino({})

mongoose.connect(env.MONGO_DB_CONNECTION_STR)
    .then(() => {
        logger.info("Connected to MongoDB")
        app.listen(process.env.DEFAULT_PORT_NUM, () => {
            console.log(`Server started on port ${port}`);
        })
    })
    .catch((err) => {
        logger.error(`MongoDB Connection exception thrown: ${err.message}`);
    });

