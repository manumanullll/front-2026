import './styles.css';

export default function Requerimentos() {
  return (
    <div className="page-container">
      <h1>Secretaria Virtual</h1>
      <p>Solicite documentos e declarações.</p>
      <div className="req-grid">
        <button className="req-btn">Declaração de Matrícula</button>
        <button className="req-btn">Histórico Escolar</button>
      </div>
    </div>
  );
}