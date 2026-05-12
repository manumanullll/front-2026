import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

export default function Faltas() {
  return (
    <>
      <PageHeader 
        title="Minhas Faltas" 
        description="Confira seu registro de assiduidade por disciplina." 
      />
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <th style={{ padding: '10px' }}>Disciplina</th>
              <th style={{ padding: '10px' }}>Total de Faltas</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '10px' }}>Programação Web</td><td style={{ padding: '10px' }}>2</td></tr>
            <tr><td style={{ padding: '10px' }}>Banco de Dados</td><td style={{ padding: '10px' }}>4</td></tr>
            <tr><td style={{ padding: '10px' }}>Engenharia de Software</td><td style={{ padding: '10px' }}>0</td></tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}