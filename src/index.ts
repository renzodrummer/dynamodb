import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyparser from "body-parser"
import "dotenv/config";

import router from "./server/member.router";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
// app.use(helmet());
app.use(bodyparser.json());

app.use("/member", router);

app.listen(PORT, () => {
  console.info(`Listening to port ${PORT}`);
});
