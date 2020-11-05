import { Request, Response, Router } from "express";

import Post from "../models/Post";

class PostRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  async getPosts(req: Request, res: Response) {
    res.json(await Post.find());
  }

  async getPost(req: Request, res: Response) {
    res.json(await Post.findById(req.params.id));
  }

  async createPost(req: Request, res: Response) {
    res.json(await new Post(req.body).save());
  }

  async updatePost(req: Request, res: Response) {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  }

  async deletePost(req: Request, res: Response) {
    res.json(await Post.findByIdAndDelete(req.params.id));
  }

  routes() {
    this.router.get("/", this.getPosts);
    this.router.get("/:id", this.getPost);
    this.router.post("/", this.createPost);
    this.router.put("/:id", this.updatePost);
    this.router.delete("/:id", this.deletePost);
  }
}

const postRouter = new PostRouter();

export default postRouter.router;
