import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/homePage/homePage'
import Header from '../layouts/header/header'
import Footer from '../layouts/footer/footer'
import './index.css'
import { ROUTES } from '../utils/routes'
import Registration from '../pages/registration/registration'
import Auth from '../pages/auth/auth'
export const App = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.REGISTER} element={<Registration/>}/>
                <Route path={ROUTES.LOGIN} element={<Auth/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}