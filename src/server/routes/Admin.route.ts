import Router from 'koa-router'

const Route = new Router({ prefix: "/admin" });

Route.get('/', async (ctx, next) => {
  ctx.body = 'admin res'
});

export default Route;
