import { Route, BrowserRouter, Routes as Paths } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Paths>
                <Route Component={Login} path='/'/>
                <Route Component={Register} path='/register'/>
                <Route Component={Profile} path='/profile'/>
            </Paths>
        </BrowserRouter>
    )
}