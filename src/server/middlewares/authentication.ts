import { Context } from "koa"
import { Authenticator } from "../../libs";

export function authentication(authenticator: Authenticator) {
  return async (ctx: Context, next: () => Promise<any>) => {
    // const token = ctx.header.authorization as string
    const token = ctx.cookies.get('next-auth.session-token') as string
    // const token = ctx.cookies as string
    const user = await authenticator.validate(token)
    console.log(user, "==== user");
    ctx.state.user = user;
    await next();
  };
}