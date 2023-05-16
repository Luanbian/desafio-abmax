export interface IUserController {
  register(register: inputUser): Promise<IHttpsResponse>;
  listUsers(): Promise<IHttpsResponse>;
  update(body: inputUser, id: string): Promise<IHttpsResponse>;
  delete(id: string):Promise<IHttpsResponse>;
}

export interface IUserDatabase {
  insertUser(register: inputUser): Promise<number[] | undefined>;
  listUsers(): Promise<any[]>;
  update(body: inputUser, id: string): Promise<number | undefined>;
  delete(id: string): Promise<number | undefined>;
}

export interface IHttpsResponse {
  message?: string;
  statusCode?: number;
  data?: any;
}

export interface inputUser {
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
