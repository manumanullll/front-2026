import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-info">
        <span>Bem-vindo, <strong>Aluno</strong></span>
      </div>
      <div className="header-profile">
        {/* Usaremos um placeholder para a imagem por enquanto */}
        <div className="avatar-circle">A</div>
      </div>
    </header>
  );
}   