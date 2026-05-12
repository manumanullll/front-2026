import PageHeader from "../components/PageHeader";
import Card from "../../components/Card";

export default function Dashboard() {
  return (
    <>
      
      <PageHeader 
        title="Dashboard" 
        description="Resumo das suas atividades acadêmicas." 
      />

      
      <div style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
        <span>Bem-vindo, <strong>Aluno</strong></span>
      </div>

      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '16px' 
      }}>
        <Card>
          <h4 style={{ color: '#666', marginBottom: '8px' }}>Faltas totais</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>12</p>
        </Card>
        
        <Card>
          <h4 style={{ color: '#666', marginBottom: '8px' }}>Média Semestral</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>8.5</p>
        </Card>

        <Card>
          <h4 style={{ color: '#666', marginBottom: '8px' }}>Próximo Boleto</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>10/06</p>
        </Card>
      </div>
    </>
  );
}