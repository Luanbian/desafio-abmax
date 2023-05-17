import { expect, it, describe, vi } from "vitest";
import { ContactController } from "../src/controllers/user.controller";

describe('update an contact by id and body', () => {
    it('should be able to update an user by id and body', async () => {
        const updateUserMock = vi.fn().mockResolvedValue([1])
        const userController = new ContactController({update: updateUserMock} as any)
        const body = {
            firstName: "Luan",
			lastName: "Almeida",
			email: "teste@teste",
			phone: "15981806866",
			gender: "Masculino"
        }
        const id = '1'
        await expect(userController.update(body, id)).resolves.toEqual({
            message: 'Ok',
            statusCode: 200,
        })
        expect(updateUserMock).toHaveBeenCalledOnce()
        expect(updateUserMock).toHaveBeenCalledWith(body, id)
    })
})