import {Button, Card, ListItem, Popover,  PopoverContent, PopoverTrigger, Portal, UnorderedList } from "@chakra-ui/react";
import useSWR from 'swr'
import { baseURL } from "../api/api";
import FormUser from "./Form";
import axios from "axios";
import Contacts from "./Contacts";

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

    const handleDelete = async (id: string) => {
        await axios.delete(`${baseURL}/user/${id}`)
    }

    return (
        <Card>
            <h1>Seus contatos</h1>
            <UnorderedList>
            {users && users.map((user: ListUsers) => (
                <div key={user.id}>
                    <ListItem>Nome: {user.firstName}</ListItem>
                    <ListItem>Sobrenome: {user.lastName}</ListItem>
                    <ListItem>Email: {user.email}</ListItem>
                    <ListItem>Telefone: {user.phone}</ListItem>
                    <ListItem>Genero: {user.gender}</ListItem>
                    <Popover>
                        <PopoverTrigger>
                            <Button variant='solid' colorScheme="green">Editar</Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <FormUser method="update" id={user.id} inputs={user}/>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                    <Button variant='solid' colorScheme='red' onClick={() => handleDelete(user.id)}> Delete </Button>
                </div>
            ))}
            </UnorderedList>
            <Contacts/>
            {error && <p>{error.message}</p>}
        </Card>
    )
}