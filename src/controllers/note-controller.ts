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

export const getNote: RequestHandler = async (request, response, next) => {
    try {
        // Looks through MongoDB to find all "Notes" instances
        // .exec() returns a promise
        // await is an async keyword
        const noteId: string = request.params.noteId;

        const note = await NoteModel.findById(noteId).exec();
        response.status(200).json(note);
    } catch (error) {
        // Calls the exception handler THAT IS DIRECTLY AFTER THIS CODE BLOCK
        next(error);
    }
}

export const createNote: RequestHandler = async (request, response, next) => {


    try {
        // Stores the title and text of the note being created by the user on the front end
        const noteTitle: string = request.body.noteTitle;
        const noteText: string = request.body.noteText;

        // Passes the newly created note to the Model and returns a promise
        // This is why we use the async "await" key word
        const newNote = await NoteModel.create({
            noteTitle: noteTitle,
            noteText: noteText
        });

        response.status(201).json(newNote);

    } catch (error) {
        // Calls the exception handler THAT IS DIRECTLY AFTER THIS CODE BLOCK
        next(error);
    }

};