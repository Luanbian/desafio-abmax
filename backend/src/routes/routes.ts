import { Router } from "express";
import { makeUserController } from "../app/factories";
import { z } from 'zod';

export const router = Router();
const userController = makeUserController();

const RegisterSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    gender: z.string()
})

router.post('/register', async (req, res) => {
    const register = RegisterSchema.parse(req.body);
    const request = await userController.register(register);
    res.json(request);
});
router.get('/user', async (_, res) => {
    const response = await userController.listUsers();
    res.json(response)
})