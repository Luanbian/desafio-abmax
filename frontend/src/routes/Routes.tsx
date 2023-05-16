import { Route, BrowserRouter, Routes as Paths } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Paths>
                <Route Component={Login} path='/'/>
                <Route Component={Register} path='/register'/>
            </Paths>
        </BrowserRouter>
    )
}