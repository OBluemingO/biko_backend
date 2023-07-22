import Router from 'koa-router'

const userRouer = new Router({ prefix: "/admin" });

userRouer.get('/', async (ctx, next) => {
  ctx.body = 'admin res'
});

export default userRouer;
