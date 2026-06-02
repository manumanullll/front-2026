import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const autenticado = !!usuario;

    const login = (dadosUsuario) => {
        setUsuario(dadosUsuario);
    };

    const logout = () => {
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