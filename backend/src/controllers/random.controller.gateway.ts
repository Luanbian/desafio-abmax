import { AtributtesGateway, IHttpsResponse, IRandomController, IRandomGateway } from '../interfaces/interface';

export class RandomGatewayController implements IRandomController{

    constructor(private readonly randomGateway: IRandomGateway) {}

    private getContacts = async () => {
        try {
            return await this.randomGateway.getRandomContact();
        } catch (error) {
            console.log(error)
        }
    }

    private filterResponse = async (response?: AtributtesGateway[]) => {
        const filtered = response?.map(({login: { uuid }, name: { first, last }, email, phone, gender}: AtributtesGateway) => ({
            uuid,
            first,
            last,
            email,
            phone,
            gender
        }));
        return filtered;
    }

    public getRandomContact = async (): Promise<IHttpsResponse> => {
        const response = await this.getContacts();
        const filtered = await this.filterResponse(response)
        return {
            message: 'Ok',
            statusCode: 200,
            results: filtered
        }
    }
}