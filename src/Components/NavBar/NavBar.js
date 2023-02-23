import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar__container'>
                <li>
                    <NavLink to='/' className='navbar__link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='navbar__link'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='navbar__link'>Contact</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Navbar;