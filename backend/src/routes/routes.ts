import { Router, json } from "express";
import { makeUserController } from "../app/factories";
import { z } from 'zod';

export const router = Router();
const userController = makeUserController();

const UserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    gender: z.string()
})
const IdSchema = z.object({
    id: z.string(),
});

router.post('/user', async (req, res) => {
    const body = UserSchema.parse(req.body);
    const request = await userController.register(body);
    res.json(request);
});
router.get('/user', async (_, res) => {
    const response = await userController.listUsers();
    res.json(response);
});
router.put('/user/:id', async (req, res) => {
    const body = UserSchema.parse(req.body);
    const param = IdSchema.parse(req.params)
    const update = await userController.update(body, param.id);
    res.json(update);
})