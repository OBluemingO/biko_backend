import Koa from "koa";
import { Server } from "http";
import bodyParser from "koa-bodyparser";
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
  app.use(Routes.routes());

  return appServer; 
}
