import './styles.css';

export default function Boletos() {
  return (
    <div className="page-container">
      <h1>Financeiro</h1>
      <div className="boleto-card">
        <div>
          <strong>Mensalidade - Abril</strong>
          <p>Vencimento: 10/04/2026</p>
        </div>
        <button className="btn-pagar">Gerar Boleto</button>
      </div>
    </div>
  );
}