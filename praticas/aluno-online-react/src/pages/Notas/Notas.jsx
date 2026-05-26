import "./Notas.css";

function Notas() {
  return (
    <>
      <h1>Minhas Notas</h1>
      <h3>Histórico de Notas por Semestre</h3>

      <section className="table-container">
        <div className="table-header">2026.1</div>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Menção</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>SR</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Notas;