import { RegisterController } from "../controllers/register.controller";
import { RegisterDatabase } from "../database/register.database";

export const makeRegisterDatabase = () => {
    return new RegisterDatabase();
}
export const makeRegisterController = () => {
    const registerDatabase = makeRegisterDatabase();
    return new RegisterController(registerDatabase);
}