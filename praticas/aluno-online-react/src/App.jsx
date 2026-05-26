import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Faltas from './pages/Faltas/Faltas';
import Notas from './pages/Notas/Notas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm/RequerimentoForm'; 
import Login from './pages/Login/Login';

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={!autenticado ? <Login /> : <Navigate to="/" />} />

      <Route path="/" element={autenticado ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
        <Route path="requerimentos/novo" element={<RequerimentoForm />} />
      </Route>

      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
