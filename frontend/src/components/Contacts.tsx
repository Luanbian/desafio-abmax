import useSWR from 'swr'
import { baseURL } from '../api/api'
import { CardContact, ContainerContate } from '../style/style'

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
        <ContainerContate>
            <h1>Todos os contatos</h1>    
            <br/>
            {contacts && contacts.map((contact: ListContacts) => (
                <CardContact key={contact.uuid}>
                    <p>{contact.first}</p>
                    <p>{contact.last}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <br/>
                </CardContact>

            ))}
            {error && (<p>{error.message}</p>)}
        </ContainerContate>
    )
}