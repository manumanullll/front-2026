import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

export default function Notas() {
  return (
    <>
      <PageHeader 
        title="Minhas Notas" 
        description="Acompanhe seu desempenho acadêmico neste semestre." 
      />
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <th style={{ padding: '10px' }}>Disciplina</th>
              <th style={{ padding: '10px' }}>A1</th>
              <th style={{ padding: '10px' }}>A2</th>
              <th style={{ padding: '10px' }}>Média</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Programação Web</td>
              <td style={{ padding: '10px' }}>9.0</td>
              <td style={{ padding: '10px' }}>8.5</td>
              <td style={{ padding: '10px' }}>8.75</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}