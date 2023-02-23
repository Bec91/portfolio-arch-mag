import Navbar from '../NavBar/NavBar';
import './Header.scss';

function Header() {
    return (
        <>
        <div className="header">
            <h1 className="header__title">Arch Magazine</h1>
        <Navbar/>
        </div>
        </>
    )
}

export default Header;