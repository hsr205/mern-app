
// All of this schema must adhere to the principles find in MongoDB
export interface Note {
    _id: string;
    noteTitle: string;
    noteText?: string;
    createdAt: string;
    updatedAt: string;
}

