import useSWR from 'swr'
import { baseURL } from '../api/api'

interface ListContacts {
    first: string,
    last: string
    gender: string
    email: string
    phone: string
    uuid: string
}

export default function Contacts() {
    const {data: contacts, error} = useSWR<ListContacts[]>(`${baseURL}/contacts`);
    return (
        <>
            <p>Todos os contatos</p>
            <br/>
            {contacts && contacts.map((contact: ListContacts) => (
                <div key={contact.uuid}>
                    <p>{contact.first}</p>
                    <p>{contact.last}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <br/>
                </div>

            ))}
            {error && (<p>{error.message}</p>)}
        </>
    )
}