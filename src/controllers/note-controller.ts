import NoteModel from "../models/notes";
import {RequestHandler} from "express";

export const getNotes: RequestHandler = async (request, response, next) => {
    try {
        // Looks through MongoDB to find all "Notes" instances
        // .exec() returns a promise
        // await is an async keyword
        const notes = await NoteModel.find().exec();
        response.status(200).json(notes);
    } catch (error) {
        // Calls the exception handler THAT IS DIRECTLY AFTER THIS CODE BLOCK
        next(error);
    }
}