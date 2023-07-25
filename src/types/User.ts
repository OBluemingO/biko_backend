import { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: "admin" | "user";
  age?: number;
  profile_picture?: string;
  address?: string;
}

export interface AuthUser {
  _id: string;
  email: string;
  role: string;
}

// export type Role = 'admin' | 'user'