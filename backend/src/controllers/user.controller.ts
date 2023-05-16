import { inputNewUser, IUserController, IHttpsResponse, IUserDatabase, inputLogin } from "../interfaces/interface";

export class UserController implements IUserController{
    constructor(private readonly userDatabase: IUserDatabase){}

    public register = async (register: inputNewUser): Promise<IHttpsResponse> => {
        const newRegister = await this.userDatabase.insertUser(register);
        return {
            message: 'created',
            statusCode: 200,
            data: newRegister
        }
    }

    public login = async (login: inputLogin): Promise<IHttpsResponse> => {
        try {
            const userLogin = await this.userDatabase.login(login);
            return {
                message: 'Ok',
                statusCode: 200,
                data: userLogin
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 404
            }
        }
    }
}