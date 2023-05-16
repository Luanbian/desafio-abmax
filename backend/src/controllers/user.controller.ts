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
        console.log('entrou')
        try {
            const listUsers = await this.userDatabase.listUsers();
            console.log(listUsers)
            return {
                message: 'Ok',
                statusCode: 200,
                data: [ listUsers ]
            }
        } catch (error) {
            return {
                message: error.message,
                statusCode: 204
            }
        }
    }
}