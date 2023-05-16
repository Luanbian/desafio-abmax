import {describe, it, vi, expect} from 'vitest'
import { UserController } from '../src/controllers/user.controller';

describe('verify if user exist', () => {
    it('should be able to verify if user exists', async () => {
        const loginMock = vi.fn().mockResolvedValue([1]);
        const userController = new UserController({login: loginMock} as any)
        const login = {
            email: 'Teste@teste',
            password: 'TestePass'
        }
        await expect(userController.login(login)).resolves.toEqual({
            message: 'Ok',
            statusCode: 200,
            data: [ 1 ]
        })
        expect(loginMock).toHaveBeenCalledOnce()
        expect(loginMock).toHaveBeenCalledWith(login)
    })
})