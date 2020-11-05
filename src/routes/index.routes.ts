import { Request, Response, Router } from "express";

class IndexRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("hola mundo");
    });
  }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;
