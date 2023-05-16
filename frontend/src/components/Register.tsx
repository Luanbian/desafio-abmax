import {FormControl, FormLabel, Input, Card, Button, CardFooter, RadioGroup, HStack, Radio} from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { baseURL } from '../api/api';
import axios from 'axios';

export default function Register() {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<string>('Masculino');
    const [userExist, setUserExist] = useState(false);

    const handleRegister = async () => {
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
            const request = await axios.post(`${baseURL}/register`, registerRequest);
            const response = request.data.message;
            response == 'created' ? (window.location.href = '/profile') : setUserExist(true);
        }
    }

    return (
        <Card maxW='sm'>
            <FormControl>
                <FormLabel>Contato</FormLabel>
                <Input type='text' placeholder='Nome' ref={firstNameRef}/>
                <Input type='text' placeholder='Sobrenome' ref={lastNameRef}/>
                <FormLabel>E-mail</FormLabel>
                <Input type='email' placeholder='coloque aqui seu e-mail' ref={emailRef}/>
                <FormLabel>Telefone</FormLabel>
                <Input type='number' placeholder='coloque aqui o numero' ref={phoneRef}/>
                <FormLabel>Genero</FormLabel>
                <RadioGroup defaultValue='Masculino' onChange={(value) => genderRef.current = value}>
                    <HStack spacing='24px'>
                        <Radio value='Masculino'>Masculino</Radio>
                        <Radio value='Feminino'>Feminino</Radio>
                    </HStack>
                </RadioGroup>
                <Button variant='solid' colorScheme='blue' onClick={handleRegister}> Cadastrar </Button>
                {userExist && (
                    <CardFooter color='red'>E-mail já cadastrado</CardFooter>
                )}
            </FormControl>
        </Card>
    )
}