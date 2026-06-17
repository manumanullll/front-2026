const BASE_URL = "http://localhost:3000/requerimentos";

export const listarRequerimentos = async () => {
    try {
        const response = await fetch(BASE_URL);
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
        const requerimentoComStatus = {
            ...novoRequerimento,
            situacao: "Pendente",
        };

        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requerimentoComStatus),
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar o novo requerimento na API.");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro em cadastrarRequerimento:", error);
        throw error;
    }
};