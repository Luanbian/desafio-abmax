import { Card, CardHeader, Heading, CardBody, InputGroup, Input, InputLeftAddon, ButtonGroup, Button, CardFooter } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { baseURL } from '../api/api'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [userNotFound, setUserNotFound] = useState(false);

    const handleLogin = async () => {
        if(emailRef.current && passwordRef.current) {
            const inputEmailValue = emailRef.current.value;
            const inputPasswordValue = passwordRef.current.value;
            if(inputEmailValue.length > 3 && inputPasswordValue.length > 3) {
                const loginRequest = {
                    email: inputEmailValue,
                    password: inputPasswordValue
                }
                const request = await axios.post(`${baseURL}/login`, loginRequest);
                const response = request.data.message;
                response == 'Ok' ? (window.location.href = '/profile') : setUserNotFound(true);
            }
        }
    }

    return (
        <Card maxW='sm'>
            <CardHeader>
                <Heading size='md'>Login</Heading>
            </CardHeader>
            <CardBody>
                <InputGroup>
                    <InputLeftAddon children='email'/>
                    <Input placeholder='email' variant='flushed' ref={emailRef}/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='senha'/>
                    <Input placeholder='senha' variant='flushed' ref={passwordRef}/>
                </InputGroup>
            </CardBody>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleLogin}>
                    Entrar
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    <Link to='/register'>
                        Cadastrar
                    </Link>
                </Button>
            </ButtonGroup>
            {userNotFound && (
                <CardFooter color='red'>usuário não encontrado, faça seu cadastro</CardFooter>
            )}
        </Card>
   )
}