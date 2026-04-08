import './styles.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Aluno Online</h2>
      </div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Faltas</li>
          <li>Notas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
        </ul>
      </nav>
    </aside>
  );
}