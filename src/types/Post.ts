import { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  author: Schema.Types.ObjectId;
}