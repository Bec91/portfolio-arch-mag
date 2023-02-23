import Navbar from '../NavBar/NavBar';
import './Header.scss';

function Header() {
    return (
        <>
        <div className="header">
            <h1 className="header__title">Arch Magazine</h1>
<div className='header__padding'></div>
        <Navbar/>
        </div>
        </>
    )
}

export default Header;