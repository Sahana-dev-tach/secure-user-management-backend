import express from 'express';
import { register, login } from '../controllers/auth.controllers.js';
import validate  from '../middleware/validate.middleware.js';
import { registerSchema } from '../validation/auth.validation.js';
import { loginSchema } from '../validation/auth.validation.js';

const router = express.Router();
router.post('/register', validate(registerSchema), register);
router.post('/login',validate(loginSchema), login);
export default router;