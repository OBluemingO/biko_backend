import Router from 'koa-router'
import { UserController } from '../controllers';

const Route = new Router({ prefix: "/users" });
const controllerInstance = new UserController();

Route.get("/all", controllerInstance.getAllUser);
Route.get("/:_id", controllerInstance.getUser);

export default Route;
