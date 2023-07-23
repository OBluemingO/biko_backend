import { Context } from "koa"
import { AuthUser, Role } from "../../types"; 

export function authorization(roles:Role[]) {
  return async (ctx: Context, next: () => Promise<any>) => {
    const user:AuthUser = ctx.state.user;

    if(roles.findIndex(el => el == user.role) == -1){
      // TODO: thorw into logger
    }
    await next()
  };
}