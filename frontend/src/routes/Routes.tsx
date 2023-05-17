import { Route, BrowserRouter, Routes as Paths } from 'react-router-dom'
import Register from '../components/Register'
import MyContacts from '../components/MyContacts'

export default function Routes() {
    return (
        <BrowserRouter>
            <Paths>
                <Route Component={Register} path='/register'/>
                <Route Component={MyContacts} path='/'/>
            </Paths>
        </BrowserRouter>
    )
}