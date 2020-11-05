"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../models/Post"));
class PostRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield Post_1.default.find());
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield Post_1.default.findById(req.params.id));
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield new Post_1.default(req.body).save());
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield Post_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true }));
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield Post_1.default.findByIdAndDelete(req.params.id));
        });
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
exports.default = postRouter.router;
