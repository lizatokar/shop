import './Header.css';
import logo from '../../assets/img/Logo/logo.png';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='Header'>
            <img src={logo} alt=""/>
            <nav>
               <NavLink to='/'>Main</NavLink>
               <NavLink to='/best-sellers'>Best Sellers</NavLink>
               <NavLink to='/contacts'>Contacts</NavLink>
            </nav>
        </header>
    )
}

export default Header;