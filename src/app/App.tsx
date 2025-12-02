import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/homePage/homePage'
import Header from '../layouts/header/header'
import './index.css'
export const App = () =>{
    return(
        
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}