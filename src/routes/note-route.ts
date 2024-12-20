import express from "express";
import * as NotesController from "../controllers/note-controller"

const router = express.Router();


router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote);

router.post("/", NotesController.createNote);

export default router;