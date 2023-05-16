import { Route, BrowserRouter, Routes as Paths } from 'react-router-dom'
import Register from '../components/Register'
import Profile from '../components/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Paths>
                <Route Component={Register} path='/register'/>
                <Route Component={Profile} path='/'/>
            </Paths>
        </BrowserRouter>
    )
}