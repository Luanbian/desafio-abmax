import { inputNewUser, IRegisterController, IHttpsResponse, IRegisterDatabase } from "../interfaces/interface";

export class RegisterController implements IRegisterController{
    constructor(private readonly registerDatabase: IRegisterDatabase){}

    public register = async (register: inputNewUser): Promise<IHttpsResponse> => {
        const newRegister = await this.registerDatabase.insertRegister(register);
        return {
            message: 'created',
            statusCode: 200,
            data: newRegister
        }
    }
}