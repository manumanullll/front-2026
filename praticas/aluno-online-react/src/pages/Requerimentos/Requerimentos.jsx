import "./Requerimentos.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { listarRequerimentos } from '../../services/requerimentoService';


function Requerimentos() {

  const navigate = useNavigate();
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const carregarRequerimentos = async () => {
      try {
        const dados = await listarRequerimentos();
        setLista(dados);
      } catch (error) {
        console.error("Erro ao carregar os requerimentos:", error);
      }
    };
    carregarRequerimentos();
  }, []);

  return (
    <>
      <h1>Meus Requerimentos</h1>
      <h3>Faça solicitações online para a secretaria</h3>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => navigate('novo')}>
          ➕ Novo Requerimento
        </button>
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
            {lista.map((req) => (
              <tr key={req.id}>
                <td>{req.tipo}</td>
                <td>{req.data}</td>
                <td>{req.situacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Requerimentos;
