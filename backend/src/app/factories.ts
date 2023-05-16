import { UserController } from "../controllers/user.controller";
import { UserDatabase } from "../database/user.database";

export const makeUserDatabase = () => {
    return new UserDatabase();
}
export const makeUserController = () => {
    const userDatabase = makeUserDatabase();
    return new UserController(userDatabase);
}