import { Schema, model } from "mongoose";
import { IUser } from "../../types";

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], required: true },
    age: { type: Number },
    profile_picture: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

const User = model<IUser>("Users", userSchema);

export default User;
