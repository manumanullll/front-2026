import { logout } from "./authService";

const BASE_URL = "http://localhost:3000/requerimentos";

const obterCabecalhosComToken = (headersExtras = {}) => {
    const token = localStorage.getItem("token");

    if (!token) {
        logout();
        window.location.href = "/login";
        throw new Error("Erro 401: Unauthorized. Token ausente.");
    }

    return {
        "Authorization": `Bearer ${token}`,
        ...headersExtras,
    };
};

const tratarErroAutorizacao = (response) => {
    if (response.status === 401) {
        logout();
        window.location.href = "/login";
        throw new Error("Erro 401: Sessão expirada ou token inválido.");
    }
};

export const listarRequerimentos = async () => {
    try {
        const headers = obterCabecalhosComToken();
        const response = await fetch(BASE_URL, { headers });

        tratarErroAutorizacao(response);

        if (!response.ok) {
            throw new Error("Erro ao buscar os requerimentos da API.");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro em listarRequerimentos:", error);
        throw error;
    }
};

export const cadastrarRequerimento = async (novoRequerimento) => {
    try {
        const headers = obterCabecalhosComToken({
            "Content-Type": "application/json",
        });

        const requerimentoComStatus = {
            ...novoRequerimento,
            situacao: "Pendente",
        };

        const response = await fetch(BASE_URL, {
            method: "POST",
            headers,
            body: JSON.stringify(requerimentoComStatus),
        });

        tratarErroAutorizacao(response);

        if (!response.ok) {
            throw new Error("Erro ao salvar o novo requerimento na API.");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro em cadastrarRequerimento:", error);
        throw error;
    }
};