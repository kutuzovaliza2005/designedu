import { Link } from 'react-router-dom';

function Header({ isMenuOpen, setIsMenuOpen }) {
    return (
        <header className="header">
            <div className="logo">
                <h1><Link to="/" className="logo-link">Designedu</Link></h1>
            </div>
            <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Меню">
                ☰
            </button>
            <nav className={isMenuOpen ? 'nav open' : 'nav'}>
                <ul className="nav-menu">
                    <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>Новости</Link></li>
                    <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Курсы</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>О школе</Link></li>
                    <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;