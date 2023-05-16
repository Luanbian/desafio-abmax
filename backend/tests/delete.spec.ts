import { expect, it, describe, vi } from "vitest";
import { UserController } from "../src/controllers/user.controller";

describe('delete one contact by id', () => {
    it('should be able to delete an contact by id', async () => {
        const deleteUserMock = vi.fn().mockResolvedValue([1])
        const userController = new UserController({delete: deleteUserMock} as any)
        const id = '1'
        await expect(userController.delete(id)).resolves.toEqual({
            message: 'Ok',
            statusCode: 200,
            data: [ 1 ]
        })
        expect(deleteUserMock).toHaveBeenCalledOnce()
        expect(deleteUserMock).toHaveBeenCalledWith(id)
    })
})