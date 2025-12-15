import express from 'express';
import {getAllUser, blockUser} from '../controllers/user.controllers.js';
import {isAuthenticated} from '../middleware/auth.middleware.js';
import { authorizeRoles } from '../middleware/role.middleware.js';
const router = express.Router();

router.get('/get-users',isAuthenticated,authorizeRoles("admin"),getAllUser);
router.put('/block-user/:id', isAuthenticated, authorizeRoles("admin"), blockUser);

export default router;