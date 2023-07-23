import { User } from "../../server/models"; 
import { IUser, AuthUser  } from "../../types";
import jwt from "jsonwebtoken";
export interface IAuthenticator {
  validate(token: string): Promise<AuthUser | undefined>;
  authenticate(user: IUser): string;
}

export class Authenticator implements IAuthenticator {
  private secret_key: string;
  private userDoc: typeof User;

  constructor(userDoc: typeof User) {
    this.secret_key = process.env.SECRET_KEY as string;
    this.userDoc = userDoc;
  }
  public async validate(token: string) {
    try {
      const decode = jwt.verify(token, this.secret_key) as AuthUser;
      const user = await this.userDoc.findOne({ email: decode.email });

      if(!user) throw `can't find email`
      
      return decode
      
    } catch (err) {

      // TODO: implement after create logger middleware
      // if(err instanceof Error){
      //   throw new Error(err.message);
      // }
      // throw new Error(err);

    }
  }

  public authenticate(user: IUser) {
    return jwt.sign(
      { _id: user._id, email: user.email, role: user.role },
      this.secret_key,
      { expiresIn: 60 * 60 }
    );
  }
}