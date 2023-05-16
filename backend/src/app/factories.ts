import { UserController } from "../controllers/register.controller";
import { RegisterDatabase } from "../database/register.database";

export const makeRegisterDatabase = () => {
    return new RegisterDatabase();
}
export const makeUserController = () => {
    const registerDatabase = makeRegisterDatabase();
    return new UserController(registerDatabase);
}