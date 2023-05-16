import { Card, CardHeader, Heading, CardBody, InputGroup, Input, InputLeftAddon, ButtonGroup ,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Card maxW='sm'>
            <CardHeader>
                <Heading size='md'>Login</Heading>
            </CardHeader>
            <CardBody>
                <InputGroup>
                    <InputLeftAddon children='email'/>
                    <Input placeholder='email' variant='flushed'/>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='senha'/>
                    <Input placeholder='senha' variant='flushed'/>
                </InputGroup>
            </CardBody>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
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