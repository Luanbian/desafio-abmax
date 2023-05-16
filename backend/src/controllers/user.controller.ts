import { inputNewUser, IUserController, IHttpsResponse, IUserDatabase, inputLogin } from "../interfaces/interface";

export class UserController implements IUserController{
    constructor(private readonly userDatabase: IUserDatabase){}

    public register = async (register: inputNewUser): Promise<IHttpsResponse> => {
        try {
            const newRegister = await this.userDatabase.insertUser(register);
            return {
                message: 'created',
                statusCode: 200,
                data: newRegister
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 400
            }
        }
    }

    public listUsers = async (): Promise<IHttpsResponse> => {
        try {
            const listUsers = await this.userDatabase.listUsers();
            return {
                message: 'Ok',
                statusCode: 200,
                data: listUsers
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 204
            }
        }
    }

    public update = async(body: inputNewUser, id: string): Promise<IHttpsResponse> => {
        try {
            const updateUser = await this.userDatabase.update(body, id);
            return {
                message: 'Ok',
                statusCode: 200,
                data: updateUser
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 400
            }
        }
    }
}