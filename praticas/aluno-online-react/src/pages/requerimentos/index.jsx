import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

export default function Requerimentos() {
  return (
    <>
      <PageHeader 
        title="Secretaria Virtual" 
        description="Solicite documentos e declarações de forma rápida." 
      />
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold' }}>Declaração de Matrícula</p>
            <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>
              Solicitar
            </button>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold' }}>Histórico Escolar</p>
            <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>
              Solicitar
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}