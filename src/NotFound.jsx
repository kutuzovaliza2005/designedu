import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="page-container">
            <div className="page-card-content" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '6rem', margin: '0', color: '#478BF9' }}>404</h1>
                <h2 style={{ marginBottom: '20px' }}>Страница не найдена</h2>
                <p style={{ marginBottom: '30px', color: '#cbd5e1' }}>
                    Извините, такой страницы не существует.
                </p>
                <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
}

export default NotFound;