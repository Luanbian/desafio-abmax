import { ContactController } from "../controllers/user.controller";
import { UserDatabase } from "../database/user.database";
import { RandomGateway } from "../gateway/random.gateway";

export const makeUserDatabase = () => {
    return new UserDatabase();
}
export const makeContactController = () => {
    const userDatabase = makeUserDatabase();
    return new ContactController(userDatabase);
}
export const makeRandomGateway = () => {
    return new RandomGateway();
}