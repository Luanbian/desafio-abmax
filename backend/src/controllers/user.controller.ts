import { inputUser, IUserController, IHttpsResponse, IUserDatabase, inputLogin } from "../interfaces/interface";

export class UserController implements IUserController{
    constructor(private readonly userDatabase: IUserDatabase){}

    public register = async (register: inputUser): Promise<IHttpsResponse> => {
        try {
            const newRegister = await this.userDatabase.insertUser(register);
            return {
                message: 'created',
                statusCode: 200,
                results: newRegister
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
                results: listUsers
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 204
            }
        }
    }

    public update = async(body: inputUser, id: string): Promise<IHttpsResponse> => {
        try {
            const updateUser = await this.userDatabase.update(body, id);
            return {
                message: 'Ok',
                statusCode: 200,
                results: updateUser
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 404
            }
        }
    }

    public delete = async(id: string): Promise<IHttpsResponse> => {
        try {
            const deleteUser = await this.userDatabase.delete(id);
            return {
                message: 'Ok',
                statusCode: 200,
                results: deleteUser
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 404
            }
        }
    }
}