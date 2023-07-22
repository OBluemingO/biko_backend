import { User } from "../models/index";
import { Context } from "koa";

class UserController {
  createUser = async (ctx: Context) => {
    try {
      const data = {
        ...(ctx.request.body as {}),
        role:'user'
      };

      const action = await User.create(data);

      ctx.body = action;
    } catch (err) {
      if(err instanceof Error){
        ctx.body = err.message;
      }
      ctx.body = err
    }
  };

  getUser = async (ctx: Context) => {
    ctx.body = `get user`;
  };

  getAllUser = async (ctx: Context) => {
    ctx.body = `get all user`;
  };
}

export default UserController