import { AtributtesGateway, IHttpsResponse, IRandomGateway } from '../interfaces/interface';
import axios from 'axios'

export class RandomGateway implements IRandomGateway {
    private getContacts = async () => {
        try {
            const request = await axios.get('https://randomuser.me/api/?results=10');
            const response: AtributtesGateway[] = request.data.results;
            return response;
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

    public getRandomData = async (): Promise<IHttpsResponse> => {
        const response = await this.getContacts();
        const filtered = await this.filterResponse(response)
        return {
            message: 'Ok',
            statusCode: 200,
            results: filtered
        }
    }
}