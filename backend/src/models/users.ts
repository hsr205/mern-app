import {InferSchemaType, Schema, model} from "mongoose";

// Creates a "schema" or configuration for how the "note" model will appear in MongoDB
const userSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    dob: {type: String, required: true},
}, {timestamps: true});

// Creates a custom "Notes" type
type User = InferSchemaType<typeof userSchema>;

// Creates a collection that will later be placed in MongoDB
export default model<User>("User", userSchema);