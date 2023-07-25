import Koa from "koa";
import { Server } from "http";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import Routes from './routes'

export class AppServer {
  private app: Koa;
  private server?: Server;

  constructor(app: Koa) {
    this.app = app;
  }
  public listen(port: string | number): Server {
    this.server = this.app.listen(port, () =>
      console.log(`server is running on port ${port}`)
    );
    return this.server;
  }

  public closeServer() {
    return "";
  }
}

export function createServer(container: any) {
  const app = new Koa();
  const appServer = new AppServer(app);
  app.use(bodyParser())
  app.use(
    cors({
      origin: "*", // Only allow requests from this origin
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
      allowMethods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
      exposeHeaders: ["Custom-Header"], // Expose additional headers to the client
      maxAge: 86400, // How long the results of a preflight request (OPTIONS) can be cached, in seconds
    })
  );

  const nestedRoutes = Routes(container)
  app.use(nestedRoutes.routes());

  return appServer; 
}
