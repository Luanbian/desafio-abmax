import { describe, it, expect, vi } from 'vitest'
import { RegisterController } from '../src/controllers/register.controller';

describe('register a new user', () => {
    it('should be able to register a new user', async () => {
        const registerMock = vi.fn().mockResolvedValue([1]);
        const registerController = new RegisterController({insertRegister: registerMock} as any);
        const register = {
            username: 'Teste',
            email: 'Teste@teste',
            password: 'teste'
        }
        await expect(registerController.register(register)).resolves.toEqual({
            message: 'created',
            statusCode: 200,
            data: [ 1 ]
        })
        expect(registerMock).toHaveBeenCalledOnce()
        expect(registerMock).toHaveBeenCalledWith(register)
    })
})