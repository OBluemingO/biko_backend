import { Authenticator } from "./src/libs";
import { User } from "./src/server/models";

export function createContainer() {
  return {
    health: "",
    logger: "",
    lib: {
      // hasher: "",
      authenticator: new Authenticator(User),
    },
    //  repositories: {
    //    task: taskRepo,
    //    user: userRepo,
    //  },
    //  managers: {
    //    task: new TaskManager(taskRepo),
    //    user: new UserManager(userRepo, hasher, authenticator),
    //  },
  };
}
