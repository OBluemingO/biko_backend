import Router from "koa-router";
import UserRoute from "./User.route";
import AdminRoute from "./Admin.route";
import AuthRoute from "./Auth.route";
import PostRoute  from "./Post.route";
import { IContainer } from "../../types";

// const routes = new Router({ prefix: "/api" });
// const nestedRoutes = [UserRoute, AdminRoute, AuthRoute, PostRoute];

// for (const route of nestedRoutes){
//   routes.use(route.routes(), route.allowedMethods());
// }
// export default routes;

export default function NestedRoutes(container: IContainer) {
    const routes = new Router({ prefix: "/api" });
    // const nestedRoutes = [UserRoute, AdminRoute, AuthRoute, PostRoute];
    const nestedRoutes = [
      PostRoute(container)
    ];

    for (const route of nestedRoutes) {
      routes.use(route.routes(), route.allowedMethods());
    }
    return routes;
}