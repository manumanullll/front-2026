import './styles.css';

export default function Faltas() {
  return (
    <div className="page-container">
      <h1>Registro de Faltas</h1>
      <p>Abaixo você encontra o resumo de presenças por disciplina.</p>
      <div className="faltas-list">
        <div className="falta-item">
          <span>Desenvolvimento Web</span>
          <span className="count">2 faltas</span>
        </div>
        <div className="falta-item">
          <span>Banco de Dados</span>
          <span className="count">0 faltas</span>
        </div>
      </div>
    </div>
  );
}