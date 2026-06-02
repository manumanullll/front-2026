import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Faltas from './pages/Faltas/Faltas';
import Notas from './pages/Notas/Notas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import Login from './pages/Login/Login';
import RequerimentoForm from './forms/RequerimentoForm';

function PrivateRoute({ children }) {
  const { autenticado } = useAuth();

  return autenticado ? children : <Navigate to="/login" replace />;
}

function PrivateRoute({ children }) {
  const { autenticado } = useAuth();

  return autenticado ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route 
        path="/" 
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />

        <Route path="requerimentos">
          <Route index element={<Requerimentos />} />
          <Route path="novo" element={<RequerimentoForm />} />
        </Route>

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;