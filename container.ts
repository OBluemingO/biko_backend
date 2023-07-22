export function createContainer() {
  return {
    health: "",
     logger: "",
     lib: {
       hasher: "",
       authenticator: "",
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
