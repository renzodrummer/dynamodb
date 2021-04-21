import { controllergetMember, controlleraddMember } from "./member.controller";
import express from "express";
import { validator, querySchema } from "../schema/member.schema";

const router = express.Router();

router.get("/", controllergetMember);

router.post("/add",validator.body(querySchema), controlleraddMember);

export default router;


