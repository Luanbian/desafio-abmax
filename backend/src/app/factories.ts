import { ContactController } from "../controllers/contact.controller";
import { UserDatabase } from "../database/user.database";
import { RandomGatewayController } from "../controllers/random.controller.gateway";
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
export const makeRandomGatewayController = () => {
    const randomGareway = makeRandomGateway();
    return new RandomGatewayController(randomGareway);
}