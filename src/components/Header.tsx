import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <h1>Maths resolver</h1>
                <h2>Une application qui répertorie et résout vos problèmes mathématiques</h2>
            </Link>
        </div >
    );
}

export default Header;