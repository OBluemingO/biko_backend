import Router from 'koa-router'
import { UserController } from '../controllers';

const userRouer = new Router({ prefix: "/users" });
const controllerInstance = new UserController();

userRouer.get("/all", controllerInstance.getAllUser);
userRouer.get("/:_id", controllerInstance.getUser);

userRouer.post("/", controllerInstance.createUser);

export default userRouer;
