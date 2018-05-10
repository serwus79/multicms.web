import { Router } from "express";
import { EINVAL } from "constants";

let router = Router();

router.get("/dd", async (req, res, next) => {
  res.json({ status: "ok" });
});

export default router;
