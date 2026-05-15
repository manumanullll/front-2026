import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

    return (
        <>
            <input type="checkbox" id="menu-toggle" className="menu-input" />
            <label htmlFor="menu-toggle" className="hamburger">
                <span></span>
            </label>

            <aside className="sidebar">
                <div className="logo-section">
                    <div className="logo-icon">🎓</div>
                    <span>Aluno Online</span>
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <NavLink to="/" className={navLinkClass} end>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/notas" className={navLinkClass}>
                                Notas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/faltas" className={navLinkClass}>
                                Faltas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/boletos" className={navLinkClass}>
                                Boletos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/requerimentos" className={navLinkClass}>
                                Requerimentos
                            </NavLink>
                        </li>
                        <li className="logout">Sair</li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;