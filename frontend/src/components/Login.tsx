import { Card, CardHeader, Heading, CardBody, InputGroup, Input, InputLeftAddon, ButtonGroup ,Button } from '@chakra-ui/react'
import { useRef } from 'react'
import { baseURL } from '../api/api'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        if(emailRef.current && passwordRef.current) {
            const inputEmailValue = emailRef.current.value;
            const inputPasswordValue = passwordRef.current.value;
            if(inputEmailValue.length > 3 && inputPasswordValue.length > 3) {
                const loginRequest = {
                    email: inputEmailValue,
                    password: inputPasswordValue
                }
                axios.post(`${baseURL}/login`, loginRequest).then(response => console.log(response));
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
        </Card>
   )
}