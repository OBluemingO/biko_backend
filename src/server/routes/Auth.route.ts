import Router from 'koa-router'
import { AuthController } from '../controllers';

const Route = new Router({ prefix: "/auth" });
const controllerInstance = new AuthController();

Route.post("/login", controllerInstance.login);
Route.post("/register", controllerInstance.registerUser);
Route.post("/change-password", controllerInstance.changePassword);
Route.post("/recover-password", controllerInstance.recoverPassword);

export default Route;
