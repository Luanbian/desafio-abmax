import { Router } from "express";
import { makeContactController, makeRandomGateway } from "../app/factories";
import { z } from 'zod';

export const router = Router();
const contactController = makeContactController();
const randomGateway = makeRandomGateway();

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
    const request = await contactController.register(body);
    res.json(request);
});
router.get('/user', async (_, res) => {
    const response = await contactController.listUsers();
    res.json(response);
});
router.put('/user/:id', async (req, res) => {
    const body = UserSchema.parse(req.body);
    const param = IdSchema.parse(req.params)
    const update = await contactController.update(body, param.id);
    res.json(update);
});
router.delete('/user/:id', async (req, res) => {
    const param = IdSchema.parse(req.params);
    const deleteUser = await contactController.delete(param.id);
    res.json(deleteUser);
});

router.get('/contacts', async (req, res) => {
    const response = await randomGateway.getRandomData();
    res.json(response);
})