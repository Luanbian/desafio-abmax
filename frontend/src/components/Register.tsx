import FormUser from "./Form";
import useSWR from 'swr'
import { baseURL } from "../api/api";

interface ListContacts {
    id: string
    first: string;
    last: string;
    email: string;
    phone: string;
    gender: string;
}
interface ListUsers {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
}

export default function Register() {
    const { data } = useSWR<ListContacts[]>(`${baseURL}/contacts`);
    if (data) {
        const formattedData: ListUsers = {
            id: data[0].id,
            firstName: data[0].first,
            lastName: data[0].last,
            email: data[0].email,
            phone: data[0].phone,
            gender: data[0].gender
        }
        return <FormUser inputs={formattedData}/>
    }
}