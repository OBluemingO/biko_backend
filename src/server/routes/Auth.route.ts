import Router from 'koa-router'
import { AuthController } from '../controllers';
import { IContainer } from '../../types';

export default function AuthRoute(container: IContainer){
  const Route = new Router({ prefix: "/auth" });
  const controllerInstance = new AuthController();
  // const auth = container.lib.authenticator

  Route.post("/login", controllerInstance.login);
  Route.post("/register", controllerInstance.registerUser);
  Route.post("/change-password", controllerInstance.changePassword);
  Route.post("/recover-password", controllerInstance.recoverPassword);
  return Route
}
