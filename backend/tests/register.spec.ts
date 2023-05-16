import { describe, it, expect, vi } from 'vitest'
import { UserController } from '../src/controllers/user.controller';

describe('register a new user', () => {
    it('should be able to register a new user', async () => {
        const registerMock = vi.fn().mockResolvedValue([1]);
        const userController = new UserController({insertUser: registerMock} as any);
        const register = {
            firstName: "Luan",
			lastName: "Almeida",
			email: "teste@teste",
			phone: "15981806866",
			gender: "Masculino"
        }
        await expect(userController.register(register)).resolves.toEqual({
            message: 'created',
            statusCode: 200,
            data: [ 1 ]
        })
        expect(registerMock).toHaveBeenCalledOnce()
        expect(registerMock).toHaveBeenCalledWith(register)
    })
})