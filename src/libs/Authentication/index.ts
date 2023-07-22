
import { IUser } from "../../types";
import jwt from "jsonwebtoken";

export interface IAuthenticator {
  // validate(token: string);
  authenticate(user:IUser): string;
}

export class Authenticator implements IAuthenticator {
  private secret_key: string;

  constructor() {
    this.secret_key = process.env.SECRET_KEY as string;
  }

  public authenticate(user: IUser) {
    return jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      this.secret_key,
      { expiresIn: 60 * 60 }
    );
  }
}