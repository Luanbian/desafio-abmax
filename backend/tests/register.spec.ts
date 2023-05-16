import { describe, it, expect, vi } from 'vitest'
import { UserController } from '../src/controllers/register.controller';

describe('register a new user', () => {
    it('should be able to register a new user', async () => {
        const registerMock = vi.fn().mockResolvedValue([1]);
        const userController = new UserController({insertUser: registerMock} as any);
        const register = {
            username: 'Teste',
            email: 'Teste@teste',
            password: 'teste'
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