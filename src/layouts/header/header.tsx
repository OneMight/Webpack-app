import {Link} from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import './header.css'
const Header = () =>{
    return(
        <header className="header">
            <div className="header-image">
                <img src="./images/logo-70.svg" alt="logo" />
            </div>
            <nav className="header_nav">
                <Link to={ROUTES.HOME}>Home</Link>
                <Link to={''}>Categories</Link>
                <Link to={''}>Contact Us</Link>
                <Link to={''}>Blog</Link>
            </nav>
            <div className="header_controll">
                <button className="header_buttons">
                    <img src="./images/account.svg" alt="account" />
                    <img src="./images/bottom-arrow.svg" alt="bottom-arrow" />
                </button>
                <Link to={''}>
                    <img src="./images/orders.svg" alt="orders" />
                </Link>
            </div>
            
        </header>
    )
}

export default Header