import Router from 'koa-router'
import * as middlewares from '../middlewares'
import { PostController } from '../controllers';
import { IContainer, Role } from '../../types';

export default function PostRoute(container:IContainer) {
  const Route = new Router({ prefix: "/post" });
  const controllerInstance = new PostController();
  const auth = container.lib.authenticator


  Route.get(
    "/create",
    middlewares.authentication(auth),
    // middlewares.authorization([Role.user]),
    controllerInstance.createPost
  );
  return Route
}
