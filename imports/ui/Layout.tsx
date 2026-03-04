import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users/list">Users List</NavLink>
        <NavLink to="/users/manage">Users Manager</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
