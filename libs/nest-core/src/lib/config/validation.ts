import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  API_GATEWAY_PORT: Joi.number().default(3001),
  USER_PORT: Joi.number().default(3002),
});
