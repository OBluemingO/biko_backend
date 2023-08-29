import { User } from "../models";
import { Auth, IUser } from "../../types";
import { Context } from "koa";
import { Authenticator, Hasher } from "../../libs";
import { setCookie } from "koa-cookies";

class AuthController {
  registerUser = async (ctx: Context) => {
    try {
      const Hash = new Hasher();
      const rawBody = ctx.request.body as Pick<
        IUser,
        "email" | "role" | "firstName" | "lastName" | "password"
      >;
      const hashPassword = Hash.hashPassword(rawBody.password);
      const data = {
        ...rawBody,
        password: hashPassword,
        role: "user",
      };
      const action = await User.create(data)
      ctx.body = action;

    } catch (err) {
      ctx.status = 500
      if (err instanceof Error) {
        ctx.body = `${err.message}`;
        return
      }
      ctx.body = `${err}`;
    }
  };

  login = async (ctx: Context) => {
    try {
      const AuthJWT = new Authenticator(User);
      const Hash = new Hasher();
      const emailAndPassword = ctx.request.body as Auth;
      const user = await User.findOne({
        email: emailAndPassword.email,
      });

      if (!user) {
        ctx.status = 404;
        ctx.body = { message: "not found user, please try agian" };
        return;
      }

      const password_checked = Hash.verifyPassword(
        emailAndPassword.password,
        user.password
      );

      if (!password_checked) {
        ctx.status = 401;
        ctx.body = { message: "password is wrong please try again" };
        return;
      }

      ctx.status = 200;
      ctx.body = {
        id: user._id,
        name: user.firstName +" "+ user.lastName,
        email: user.email,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = err instanceof Error ? err.message : err;
    }
  };

  changePassword = async (ctx: Context) => {};

  recoverPassword = async (ctx: Context) => {};
}

export default AuthController;
