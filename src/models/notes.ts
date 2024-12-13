import {InferSchemaType, Schema, model} from "mongoose";

// Creates a "schema" or configuration for how the "note" model will appear in MongoDB
const noteSchema = new Schema({
    noteTitle: {type: String, required: true},
    noteText: {type: String, required: false},
}, {timestamps: true});

// Creates a custom "Notes" type
type Notes = InferSchemaType<typeof noteSchema>;

// Creates a collection that will later be placed in MongoDB
export default model<Notes>("Note", noteSchema);