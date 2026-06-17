import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cadastrarRequerimento } from "../services/requerimentoService";

const RequerimentoForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await cadastrarRequerimento(data);
            alert("Requerimento enviado com sucesso!");
            reset();
            navigate('/requerimentos');
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Falha ao salvar o requerimento. Tente novamente.");
        }
    };

    return (
        <div className="card">
            <h2>Novo Requerimento</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Tipo de Requerimento</label>
                    <select {...register("tipo", { required: "Tipo é obrigatório" })}>
                        <option value="">Selecione um tipo...</option>
                        <option value="Matrícula">Matrícula</option>
                        <option value="Histórico">Histórico</option>
                        <option value="Trancamento">Trancamento</option>
                    </select>
                    {errors.tipo && <p style={{ color: 'red' }}>{errors.tipo.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Descrição</label>
                    <textarea
                        {...register("descricao", {
                            required: "Descrição é obrigatória",
                            minLength: { value: 10, message: "Mínimo de 10 caracteres" }
                        })}
                        placeholder="Descreva sua solicitação..."
                    />
                    {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Data do Requerimento</label>
                    <input
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                        {...register("data")}
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="button" onClick={() => navigate('/requerimentos')}>Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default RequerimentoForm;
