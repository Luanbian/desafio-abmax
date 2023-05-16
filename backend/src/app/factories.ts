import { RegisterController } from "../controllers/register.controller";

export const makeRegisterController = () => {
    return new RegisterController();
}