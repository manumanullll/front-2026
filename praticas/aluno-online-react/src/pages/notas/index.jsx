import './styles.css';

export default function Notas() {
  return (
    <div className="page-container">
      <h1>Notas do Semestre</h1>
      <table className="notas-table">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>AV1</th>
            <th>AV2</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td>9.0</td>
            <td>10.0</td>
            <td>9.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}