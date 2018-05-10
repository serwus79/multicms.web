import express from "express";
import path from "path";
import bodyParser from "body-parser";

import settings from "multicms.data/settings";
import router from "./controllers/index";

let app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/", router);
/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
  console.log("configuration:", settings);
});

export default server;
