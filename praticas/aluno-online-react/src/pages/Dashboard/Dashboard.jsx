import "./Dashboard.css";
import Card from "../../components/Card";

function Dashboard() {
  return (
    <>
      <h1>Olá, Aluno!</h1>
      <p>Bem-vindo ao portal do aluno</p>

      <Card title="Mural de Avisos">
        <p>Inscrição para o projeto de extensão</p>
        <p>Eleição para representante de turma</p>
      </Card>

      <Card title="Calendário Acadêmico">
        <p>23/02 - Início do período letivo 2026-1</p>
        <p>25/04 - Prazo final para aplicação da P1</p>
        <p>23/06 - Prazo final para aplicação da P2</p>
        <p>04/07 - Fim do período letivo 2026-1</p>
      </Card>

      <Card title="Minhas Disciplinas">
        <p>BI e Data Warehousing</p>
        <p>Construção de Frontend</p>
        <p>Manutenção de Software e Devops</p>
      </Card>
    </>
  );
}

export default Dashboard;