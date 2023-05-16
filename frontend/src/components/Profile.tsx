import { Card, ListItem, UnorderedList } from "@chakra-ui/react";
import useSWR from 'swr'
import { baseURL } from "../api/api";

interface ListUsers {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
}

export default function Profile() {
    const { data: users, error } = useSWR<ListUsers[]>(`${baseURL}/user`);
    return (
        <Card>
            <h1>Seus contatos</h1>
            <UnorderedList>
            {users && users.map((user: ListUsers) => (
                <>
                    <ListItem>{user.id}</ListItem>
                    <ListItem>{user.firstName}</ListItem>
                    <ListItem>{user.lastName}</ListItem>
                    <ListItem>{user.email}</ListItem>
                    <ListItem>{user.phone}</ListItem>
                    <ListItem>{user.gender}</ListItem>
                </>
            ))}
            </UnorderedList>
            {error && <p>{error.message}</p>}
        </Card>
    )
}