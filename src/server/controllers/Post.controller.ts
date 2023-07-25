import { Post } from "../models";
import { Context } from "koa";

class PostController {
  createPost = async (ctx: Context) => {
    try {
      console.log(ctx.cookies.get('next-auth.session-token'))
      ctx.body = {message: 'aaa'}
    } catch (err) {
    }
  };
}

export default PostController; 