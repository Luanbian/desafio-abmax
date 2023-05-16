import {FormControl, FormLabel, Input, Card, Button} from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { baseURL } from '../api/api';
import axios from 'axios';

export default function Register() {
    const userRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [userExist, setUserExist] = useState(false);

    const handleRegister = async () => {
        if(emailRef.current && passwordRef.current && userRef.current) {
            const inputEmailValue = emailRef.current.value;
            const inputPasswordValue = passwordRef.current.value;
            const inputUserValue = userRef.current.value;
            if(inputEmailValue.length > 3 && inputPasswordValue.length > 3 && inputUserValue.length > 3) {
                const registerRequest = {
                    username: inputUserValue,
                    email: inputEmailValue,
                    password: inputPasswordValue
                }
                const request = await axios.post(`${baseURL}/register`, registerRequest);
                const response = request.data.message;
                response == 'Ok' ? (window.location.href = '/profile') : setUserExist(true);
            }
        }
    }

    return (
        <Card maxW='sm'>
            <FormControl>
                <FormLabel>Nome de usuário</FormLabel>
                <Input type='text' placeholder='coloque aqui o nome de usuário' ref={userRef}/>
                <FormLabel>E-mail</FormLabel>
                <Input type='email' placeholder='coloque aqui seu e-mail' ref={emailRef}/>
                <FormLabel>Senha</FormLabel>
                <Input type='text' placeholder='coloque aqui uma senha' ref={passwordRef}/>
                <Button variant='solid' colorScheme='blue' onClick={handleRegister}> Cadastrar </Button>
                {userExist && (
                    <p>Usuário já existe</p>
                )}
            </FormControl>
        </Card>
    )
}