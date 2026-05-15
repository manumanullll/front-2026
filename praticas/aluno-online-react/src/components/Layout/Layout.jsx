import './Layout.css';
import Sidebar from '../Layout/Sidebar';
import Header from '../Layout/Header';
import { Outlet } from 'react-router-dom';


function Layout({ title }) {
    return (
        <div className="container">
            <Sidebar />
            <div className="main-wrapper">
                <Header title={title} />
                <main className="content-area">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;