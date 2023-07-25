import { Schema, model } from "mongoose";
import { IPost } from "../../types";

const postSchema = new Schema<IPost>(
  {
    title: { type: String },
    content: { type: String },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

postSchema.index({ email: 1 });

const Post = model<IPost>("Posts", postSchema);

export default Post;
