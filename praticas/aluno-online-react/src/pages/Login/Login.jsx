import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Input from '../../components/ui/Input';
import logo from '../../assets/learn.svg';
import './Login.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!email.trim()) {
      setEmailError('O campo de email é obrigatório.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Digite um e-mail válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('O campo de senha é obrigatório.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Validação passou! Autenticando usuário...');
      login({ nome: 'Kayã Kalki', email: email });
      navigate('/');
    }
  };

  return (
    <main className="login-container">
      <div className="login-card">
        <header className="login-header">
          <img src={logo} alt="Logo Aluno Online" className="logo" />
          <h1>Aluno Online</h1>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <Input
            label="E-mail"
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError('');
            }}
            error={emailError}
          />

          <Input
            label="Senha"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError('');
            }}
            error={passwordError}
          />

          <button type="submit" className="btn-submit">Entrar</button>
        </form>
      </div>
    </main>
  );
}