import './styles.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Bem-vindo ao portal Aluno Online. Aqui estão suas informações resumidas.</p>
      
      <div className="cards-grid">
        <div className="card">Resumo de Faltas</div>
        <div className="card">Últimas Notas</div>
        <div className="card">Próximos Boletos</div>
      </div>
    </div>
  );
}