import dotenv from "dotenv";
import winston from "winston";
import { ConnectDB } from "./src/libs";
import { createServer } from "./src/server";
import { createContainer } from "./container";

const init = async () => {
  dotenv.config();
  const port = process.env.PORT || 6000;
  ConnectDB();
  const container = createContainer()
  const app = createServer(container);
  app.listen(port)
};

init();
