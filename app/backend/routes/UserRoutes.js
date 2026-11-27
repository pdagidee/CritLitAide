import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.post("/", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

export default router;