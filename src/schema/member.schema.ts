import joi from "joi";
import {  createValidator } from "express-joi-validation";

export const validator = createValidator();

export const querySchema = joi.object({
  name: joi.string().required(),
  address: joi.string().required()
});


