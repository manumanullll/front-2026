import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import './styles.css';

export default function MainLayout({ children }) {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-body">
          {children}
        </div>
      </div>
    </div>
  );
}