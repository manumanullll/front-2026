import { createContext, useContext, useState } from 'react';
import { logout as authServiceLogout } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        const token = localStorage.getItem("token");

        if (usuarioSalvo && token) {
            return JSON.parse(usuarioSalvo);
        }
        return null;
    });

    const autenticado = !!usuario;

    const login = (dadosUsuario) => {
        setUsuario(dadosUsuario);
    };

    const logout = () => {
        authServiceLogout();
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ usuario, autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
}