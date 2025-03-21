import { Router } from "express";
import { getUsers, createUser, getUserById, updateUser, deleteUser } from "../controller/users.js";

const router = Router();

router.get('/',getUsers);
router.post('/',createUser);
router.get('/:id',getUserById);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;