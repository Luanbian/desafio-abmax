import { expect, it, describe, vi } from "vitest";
import { ContactController } from "../src/controllers/user.controller";

describe('List of all contanct in db', () => {
    it('should be able to list contacts from users', async () => {
        const listUsersMock = vi.fn().mockResolvedValue([1]);
        const userController = new ContactController({listUsers: listUsersMock} as any)
        await expect(userController.listUsers()).resolves.toEqual({
            message: 'Ok',
            statusCode: 200,
            results: [ 1 ]
        })
        expect(listUsersMock).toHaveBeenCalledOnce()
    })
})