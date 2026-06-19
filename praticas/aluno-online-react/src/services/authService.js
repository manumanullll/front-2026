const BASE_URL = "http://localhost:3000/usuarios";

export const login = async (email, senha) => {
    try {

        const response = await fetch(`${BASE_URL}?email=${email}`);
        const usuarios = await response.json();

        if (usuarios.length > 0 && usuarios[0].senha === senha) {
            const usuario = usuarios[0];

            const tokenSimulado = btoa(`${usuario.email}-token-seguro-${Date.now()}`);
            const { senha: _, ...usuarioSemSenha } = usuario;


            localStorage.setItem("token", tokenSimulado);
            localStorage.setItem("usuario", JSON.stringify(usuarioSemSenha));

            return { usuario: usuarioSemSenha, token: tokenSimulado };
        } else {

            throw new Error("E-mail ou senha inválidos.");
        }
    } catch (error) {
        console.error("Erro no processo de login:", error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
};