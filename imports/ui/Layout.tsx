import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './Header';
import './Layout.css';

export const Layout = () => {
  return (
    <div>
      <Header />
      <nav className="desktop-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users/list">Users List</NavLink>
        <NavLink to="/users/manage">Users Manager</NavLink>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
