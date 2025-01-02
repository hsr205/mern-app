import NoteModel from "../models/notes";
import {RequestHandler} from "express";
import createHttpError from "http-errors";
import {isValidObjectId} from "mongoose";

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

    const noteId = request.params.noteId;

    try {
        // Looks through MongoDB to find all "Notes" instances
        // .exec() returns a promise
        // await is an async keyword

        if (!isValidObjectId(noteId)) {
            throw createHttpError(400, `Invalid note id provided`);
        }

        const note = await NoteModel.findById(noteId).exec();

        if (!note) {
            throw createHttpError(404, `Note not found`);
        }

        response.status(200).json(note);
    } catch (error) {
        // Calls the exception handler THAT IS DIRECTLY AFTER THIS CODE BLOCK
        next(error);
    }
}

interface CreateNoteBody {
    noteTitle?: string;
    noteText?: string;
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (request, response, next) => {


    try {

        // Stores the title and text of the note being created by the user on the front end
        const noteTitle = request.body.noteTitle;
        const noteText = request.body.noteText;

        if (!noteTitle) {
            throw createHttpError(400, "Exception thrown; a title is required for each note");
        }

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

interface UpdateNoteParams {
    noteId: string
}

interface UpdateNoteBody {
    noteTitle?: string,
    noteText?: string
}

export const updateNote: RequestHandler<UpdateNoteParams, unknown, UpdateNoteBody, unknown> = async (request, response, next) => {


    try {
        // Looks through MongoDB to find all "Notes" instances
        // .exec() returns a promise
        // await is an async keyword

        const newNoteTitle = request.body.noteTitle;
        const newNoteText = request.body.noteText;
        const noteId = request.params.noteId;


        if (!newNoteTitle) {
            throw createHttpError(400, "Exception thrown; a title is required for each note");
        }

        if (!isValidObjectId(noteId)) {
            throw createHttpError(400, `Invalid note id provided`);
        }

        const note = await NoteModel.findById(noteId).exec();

        if (!note) {
            throw createHttpError(404, `Note not found`);
        }

        note.noteTitle = newNoteTitle;
        note.noteText = newNoteText;

        const updatedNote = await note.save();

        response.status(200).json(updatedNote);

    } catch (error) {
        // Calls the exception handler THAT IS DIRECTLY AFTER THIS CODE BLOCK
        next(error);
    }

};

export const deleteNote: RequestHandler = async (request, response, next) => {

    try {

        const noteId = request.params.noteId;


        if (!isValidObjectId(noteId)) {
            throw createHttpError(400, `Invalid note id provided`);
        }

        const note = await NoteModel.findById(noteId).exec();


        if (!note) {
            throw createHttpError(404, `Note not found`);
        }

        const deletedNote = await NoteModel.findByIdAndDelete(noteId);

        response.sendStatus(204).json(deletedNote);

    } catch (error) {
        next(error);
    }

}