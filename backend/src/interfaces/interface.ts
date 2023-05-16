export interface IUserController {
  register(register: inputNewUser): Promise<IHttpsResponse>;
  listUsers(): Promise<IHttpsResponse>;
}

export interface IUserDatabase {
  insertUser(register: inputNewUser): Promise<number[] | undefined>;
  listUsers(): Promise<any[]>;
}

export interface IHttpsResponse {
  message?: string;
  statusCode?: number;
  data?: any;
}

export interface inputNewUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
}

export interface inputLogin {
  email: string;
  password: string;
}
