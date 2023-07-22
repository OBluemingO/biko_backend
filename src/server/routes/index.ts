import Router from "koa-router";
import UserRoute from "./User.route";
import AdminRoute from "./Admin.route";

const routes = new Router({ prefix: "/api" });

const nestedRoutes = [UserRoute, AdminRoute];

for (const route of nestedRoutes){
  routes.use(route.routes(), route.allowedMethods());
}

export default routes;