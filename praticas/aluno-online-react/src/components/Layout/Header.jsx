import './Header.css';
import { useAuth } from '../../contexts/AuthContext';

function Header() {

    const { usuario } = useAuth();

    return (
        <header className="main-header">
            <div className="profile-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {usuario && <span style={{ fontWeight: '500' }}>Olá, Manuela </span>}
                {usuario && <span style={{ fontWeight: '500' }}>Olá, {usuario.nome}</span>}
                <div className="profile-icon">👤</div>
            </div>
        </header>
    );
}

export default Header;