import dotenv from "dotenv";
import winston from "winston";
import { ConnectDB } from "./src/libs";
import { createServer } from "./src/server";
import { createContainer } from "./container";

const init = async () => {
  dotenv.config();
  const port = process.env.PORT || 6000;
  // ?note: first step: connect db
  ConnectDB();

  const container = createContainer()
  // second step: create server
  // const app = createServer({ port });
  const app = createServer(container);
  app.listen(port)

  // app.listen(port, () => {
  //   console.log(`server is running on port ${port}`);
  // });
};

init();
