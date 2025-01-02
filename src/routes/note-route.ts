import express from "express";
import * as NotesController from "../controllers/note-controller"
import {updateNote} from "../controllers/note-controller";

const router = express.Router();


router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote);

router.post("/", NotesController.createNote);

router.patch("/:noteId", NotesController.updateNote);

export default router;