import * as express from "express";
import * as routing from "../routing";

let router = express.Router();

routing.LoadAllRoutes(router, "controllers").then(() => {
  console.log("routing loaded");
});
export default router;