export interface IContactController {
  register(register: inputUser): Promise<IHttpsResponse>;
  listUsers(): Promise<IHttpsResponse>;
  update(body: inputUser, id: string): Promise<IHttpsResponse>;
  delete(id: string):Promise<IHttpsResponse>;
}

export interface IUserDatabase {
  insertUser(register: inputUser): Promise<number[] | undefined>;
  listUsers(): Promise<any[]>;
  update(body: inputUser, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export interface IRandomController {
  getRandomContact(): Promise<IHttpsResponse>
}
export interface IRandomGateway {
  getRandomContact(): Promise<AtributtesGateway[]>;
}

export interface AtributtesGateway {
  login: {
    uuid: string
  }
  name: {
    first: string,
    last: string
  }
  email: string,
  phone: string,
  gender: string
}

export interface IHttpsResponse {
  message?: string;
  statusCode?: number;
  results?: any;
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
