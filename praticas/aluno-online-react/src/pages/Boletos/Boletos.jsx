import './Boletos.css';

function Boletos() {
  return (
    <>
      <h1>Meus Boletos</h1>

      <section className="table-container">
        <table>
          <thead>
            <tr>
              <th>Vencimento</th>
              <th>Valor R$</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19/01/2026</td>
              <td>500,00</td>
              <td>Pago</td>
            </tr>
            <tr>
              <td>19/02/2026</td>
              <td>500,00</td>
              <td>Em atraso</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Boletos;