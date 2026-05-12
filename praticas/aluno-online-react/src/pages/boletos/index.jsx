import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

export default function Boletos() {
  return (
    <>
      <PageHeader 
        title="Financeiro" 
        description="Visualize seus boletos e histórico de pagamentos." 
      />
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Mensalidade - Maio/2026</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>Vencimento: 10/05/2026</p>
          </div>
          <span style={{ backgroundColor: '#def7ec', color: '#03543f', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem' }}>
            Pago
          </span>
        </div>
      </Card>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Mensalidade - Junho/2026</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>Vencimento: 10/06/2026</p>
          </div>
          <span style={{ backgroundColor: '#fdf2f2', color: '#9b1c1c', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem' }}>
            Aberto
          </span>
        </div>
      </Card>
    </>
  );
}