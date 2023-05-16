import { inputNewUser, IRegisterController, IHttpsResponse } from "../interfaces/interface";

export class RegisterController implements IRegisterController{
    public register = async (register: inputNewUser): Promise<IHttpsResponse> => {
        return {
            message: register.username,
            statusCode: 200,
            data: [ 1 ]
        }
    }
}