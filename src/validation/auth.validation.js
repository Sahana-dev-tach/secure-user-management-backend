
import joi from 'joi';

const passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$');

export const registerSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(passwordPattern).required()
});

export const loginSchema = joi.object({
email: joi.string().email().required(),
password: joi.string().required()
});