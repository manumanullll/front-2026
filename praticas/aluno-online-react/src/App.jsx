import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
// Para testar outras, importe-as aqui:
// import Notas from './pages/Notas';

function App() {
  return (
    <MainLayout>
      {/* Troque <Dashboard /> por <Notas />, <Faltas />, etc, para testar */}
      <Dashboard />
    </MainLayout>
  );
}

export default App;