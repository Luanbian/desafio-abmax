import { Button, Card, ListItem, UnorderedList } from "@chakra-ui/react";
import useSWR from 'swr'
import { baseURL } from "../api/api";
import FormUser from "./Form";

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

    const handleDelete = () => {
        console.log('oi')
    }

    return (
        <Card>
            <h1>Seus contatos</h1>
            <UnorderedList>
            {users && users.map((user: ListUsers) => (
                <div key={user.id}>
                    <ListItem>{user.id}</ListItem>
                    <ListItem>{user.firstName}</ListItem>
                    <ListItem>{user.lastName}</ListItem>
                    <ListItem>{user.email}</ListItem>
                    <ListItem>{user.phone}</ListItem>
                    <ListItem>{user.gender}</ListItem>
                    <FormUser method="update" id={user.id} inputs={user}/>
                    <Button variant='solid' colorScheme='red' onClick={handleDelete}> Delete </Button>
                </div>
            ))}
            </UnorderedList>
            {error && <p>{error.message}</p>}
        </Card>
    )
}