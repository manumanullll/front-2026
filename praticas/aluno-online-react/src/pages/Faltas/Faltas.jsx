import "./Faltas.css";

function Faltas() {
  return (
    <>
      <h1>Minhas Faltas</h1>
      <h3>Histórico de Faltas por Semestre</h3>

      <section className="table-container">
        <div className="table-header">2026.1</div>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Total de Faltas</th>
              <th>% Presença</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>0</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Construção de Frontend</td>
              <td>0</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Manutenção de Software e Devops</td>
              <td>0</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Faltas;