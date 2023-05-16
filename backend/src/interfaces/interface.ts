export interface IUserController {
    register(register: inputNewUser): Promise<IHttpsResponse>;
    login(login: inputLogin): Promise<IHttpsResponse>;
}

export interface IUserDatabase {
    insertUser(register: inputNewUser): Promise<number[] | undefined>;
    login(login: inputLogin): Promise< string | number[] | undefined>;
}

export interface IHttpsResponse {
    message?: string;
    statusCode?: number;
    data?: number[] | number | string
}

export interface inputNewUser {
    username: string,
    email: string,
    password: string
}

export interface inputLogin {
    email: string,
    password: string
}