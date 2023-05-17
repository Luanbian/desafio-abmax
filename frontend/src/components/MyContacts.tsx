/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Button, Card, ListItem, Popover,  PopoverContent, PopoverTrigger, Portal, UnorderedList } from "@chakra-ui/react";
import useSWR from 'swr'
import { baseURL } from "../api/api";
import FormUser from "./Form";
import axios from "axios";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";
import { Container, CardContact } from "../style/style";

interface ListUsers {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
}

export default function MyContacts() {
    const { data: users = [], error, mutate } = useSWR<ListUsers[]>(`${baseURL}/user`);

    const handleDelete = async (id: string) => {
        const index = users?.findIndex(user => user.id === id)
        const newDatas = [...users]
        newDatas.splice(index!, 1)
        mutate(newDatas)
        await axios.delete(`${baseURL}/user/${id}`)
    }

    return (
        <Card>
            <Container>
                <UnorderedList>
                    <h1>Seus contatos</h1>
                    <Button variant='solid' colorScheme='blue'> 
                        <Link to='/register'>Criar</Link>
                    </Button>
                    {users && users.map((user: ListUsers) => (
                        <CardContact key={user.id}>
                            <ListItem>Nome: {user.firstName}</ListItem>
                            <ListItem>Sobrenome: {user.lastName}</ListItem>
                            <ListItem>Email: {user.email}</ListItem>
                            <ListItem>Telefone: {user.phone}</ListItem>
                            <ListItem>Genero: {user.gender}</ListItem>
                            <Container>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button variant='solid' colorScheme="green">Editar</Button>
                                    </PopoverTrigger>
                                    <Portal>
                                        <PopoverContent>
                                            <FormUser id={user.id} inputs={user}/>
                                        </PopoverContent>
                                    </Portal>
                                </Popover>
                                <Button variant='solid' colorScheme='red' onClick={() => handleDelete(user.id)}> Delete </Button>
                            </Container>
                        </CardContact>
                    ))}
                </UnorderedList>
                <Contacts/>
            </Container>
            {error && <p>{error.message}</p>}
        </Card>
    )
}