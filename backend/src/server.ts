import dotenv from 'dotenv';
dotenv.config();

import env from "./util/validateEnv";
import app from "./app";
import mongoose from "mongoose";

const port: number = env.DEFAULT_PORT_NUM;

mongoose.connect(env.MONGO_DB_CONNECTION_STR)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(env.DEFAULT_PORT_NUM, () => {
            console.log(`Server started on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(`MongoDB Connection exception thrown: ${err.message}`);
    });

