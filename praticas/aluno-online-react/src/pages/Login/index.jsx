import { useState } from 'react';
import InputGroup from '../../components/InputGroup';
import chapeuIcon from '../../assets/learn.svg'; 
import './styles.css';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "O campo de email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de e-mail inválido.";
    }

    if (!formData.password) {
      newErrors.password = "O campo de senha é obrigatório.";
    } else if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter no mínimo 6 caracteres.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Dados enviados:", formData);
      alert("Login realizado com sucesso!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={chapeuIcon} alt="Logo Aluno Online" className="login-logo" />
        
        <h1 className="login-title">Aluno Online</h1>
        
        <form onSubmit={handleSubmit} noValidate>
          <InputGroup 
            label="E-mail" 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange}
            error={errors.email}
          />

          <InputGroup 
            label="Senha" 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange}
            error={errors.password}
          />

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
      
      <footer className="login-footer">
        © 2026. Todos os direitos reservados.
      </footer>
    </div>
  );
}