import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './RequerimentoForm.css';

export default function RequerimentoForm() {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      data: new Date().toLocaleDateString('pt-BR') 
    }
  });

  const onSubmit = (data) => {
    console.log('Formulário enviado com sucesso! Dados:', data);

    reset();
    navigate('/requerimentos');
  };

  return (
    <div className="requerimento-form-container">
      <h2>Meus Requerimentos</h2>
      <h3>Novo Requerimento</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select 
            id="tipo"
            {...register('tipo', { required: 'Tipo é obrigatório' })}
            className={errors.tipo ? 'input-error' : ''}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Matrícula">Declaração de Matrícula</option>
            <option value="Histórico">Histórico Escolar</option>
            <option value="Trancamento">Trancamento de Disciplina</option>
            <option value="Segunda Chamada">Segunda Chamada de Prova</option>
          </select>
          {errors.tipo && <span className="error-message">{errors.tipo.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            rows="5"
            placeholder="Digite detalhadamente a sua solicitação..."
            {...register('descricao', { 
              required: 'Descrição é obrigatória',
              minLength: {
                value: 10,
                message: 'A descrição deve ter no mínimo 10 caracteres'
              }
            })}
            className={errors.descricao ? 'input-error' : ''}
          />
          {errors.descricao && <span className="error-message">{errors.descricao.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="data">Data do Requerimento</label>
          <input 
            type="text" 
            id="data" 
            disabled 
            {...register('data')}
          />
        </div>
        <div className="form-buttons">
          <button 
            type="button" 
            className="btn-cancelar" 
            onClick={() => navigate('/requerimentos')}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-salvar">
            Salvar
          </button>
        </div>

      </form>
    </div>
  );
}