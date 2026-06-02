import "./Requerimentos.css";
import { useNavigate} from 'react-router-dom';

function Requerimentos() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Meus Requerimentos</h1>
      <h3>Faça solicitações online para a secretaria</h3>
      
      <div style={{ margin: '20px 0'}}>
          <buton onClick={() => navigate('novo')}>
            ➕ Novo Requerimento
          </buton>
      </div>
      <section className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tipo de Requerimento</th>
              <th>Data de Solicitação</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revisão de Menção</td>
              <td>15/12/2025</td>
              <td>Indeferido</td>
            </tr>
            <tr>
              <td>Dispensa de Disciplina</td>
              <td>12/06/2025</td>
              <td>Indeferido</td>
            </tr>
            <tr>
              <td>Trancamento de Matrícula</td>
              <td>05/01/2024</td>
              <td>Deferido</td>
            </tr>
            <tr>
              <td>Mudança de Turno</td>
              <td>10/10/2023</td>
              <td>Deferido</td>
            </tr>
            <tr>
              <td>Renovação de Matrícula</td>
              <td>20/02/2023</td>
              <td>Deferido</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Requerimentos;
