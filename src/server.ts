import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";

import indexRoutes from "./routes/index.routes";
import postRoutes from "./routes/post.routes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    mongoose.connect(
      "mongodb://localhost:27017/typescript" || process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );

    this.app.set("port", process.env.PORT || 3000);

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/api/posts", postRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server port -> ", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
