import {FormControl, FormLabel, Input, Card, Button, CardFooter, RadioGroup, HStack, Radio} from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { baseURL } from '../api/api';
import axios from 'axios';

interface ListUsers {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
}
interface FormProps {
    method: string
    id?: string
    inputs?: ListUsers
}

export default function FormUser({ method, id, inputs }: FormProps) {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<string>('Masculino');
    const [userExist, setUserExist] = useState(false);

    const handleSubmit = async () => {
        const { current: email } = emailRef;
        const { current: lastName } = lastNameRef;
        const { current: firstName } = firstNameRef;
        const { current: phone } = phoneRef;
        const { current: gender } = genderRef;
        if (email && lastName && firstName && gender && phone) {
            const registerRequest = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                phone: phone.value,
                gender: gender
            }
            if(method === 'created') {
                const request = await axios.post(`${baseURL}/user`, registerRequest);
                const response = request.data.message;
                response == 'created' ? (window.location.href = '/profile') : setUserExist(true);
            } else {
                await axios.put(`${baseURL}/user/${id}`, registerRequest);
            }
        }
    }

    return (
        <Card maxW='sm'>
            <FormControl>
                <FormLabel>Contato</FormLabel>
                <Input type='text' placeholder='Nome' ref={firstNameRef} defaultValue={inputs?.firstName}/>
                <Input type='text' placeholder='Sobrenome' ref={lastNameRef} defaultValue={inputs?.lastName}/>
                <FormLabel>E-mail</FormLabel>
                <Input type='email' placeholder='coloque aqui seu e-mail' ref={emailRef} defaultValue={inputs?.email}/>
                <FormLabel>Telefone</FormLabel>
                <Input type='number' placeholder='coloque aqui o numero' ref={phoneRef} defaultValue={inputs?.phone}/>
                <FormLabel>Genero</FormLabel>
                <RadioGroup defaultValue={inputs?.gender || 'Masculino'} onChange={(value) => genderRef.current = value}>
                    <HStack spacing='24px'>
                        <Radio value='Masculino'>Masculino</Radio>
                        <Radio value='Feminino'>Feminino</Radio>
                    </HStack>
                </RadioGroup>
                <Button variant='solid' colorScheme='blue' onClick={handleSubmit}> Confirmar </Button>
                {userExist && (
                    <CardFooter color='red'>E-mail já cadastrado</CardFooter>
                )}
            </FormControl>
        </Card>
    )
}