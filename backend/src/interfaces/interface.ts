export interface IRegisterController {
    register(register: inputNewUser): Promise<IHttpsResponse>;
}

export interface IRegisterDatabase {
    insertRegister(register: inputNewUser): Promise<number[] | undefined>;
}

export interface IHttpsResponse {
    message?: string;
    statusCode?: number;
    data?: number[] | number
}

export interface inputNewUser {
    username: string,
    email: string,
    password: string
}