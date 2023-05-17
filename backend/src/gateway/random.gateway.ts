import axios from 'axios'
import { AtributtesGateway, IRandomGateway } from '../interfaces/interface';

export class RandomGateway implements IRandomGateway{
    async getRandomContact() {
        const request = await axios.get('https://randomuser.me/api/?results=10');
        const response: AtributtesGateway[] = request.data.results;
        return response;
    }
}