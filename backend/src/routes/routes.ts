import { Router } from "express";
import { makeUserController } from "../app/factories";
import { z } from 'zod';

export const router = Router();
const userController = makeUserController();

const RegisterSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string()
})

router.post('/register', async (req, res) => {
    const register = RegisterSchema.parse(req.body);
    const request = await userController.register(register);
    res.json(request);
})