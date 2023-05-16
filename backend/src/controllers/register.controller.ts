import { inputNewUser, IUserController, IHttpsResponse, IRegisterDatabase } from "../interfaces/interface";

export class UserController implements IUserController{
    constructor(private readonly registerDatabase: IRegisterDatabase){}

    public register = async (register: inputNewUser): Promise<IHttpsResponse> => {
        const newRegister = await this.registerDatabase.insertUser(register);
        return {
            message: 'created',
            statusCode: 200,
            data: newRegister
        }
    }
}