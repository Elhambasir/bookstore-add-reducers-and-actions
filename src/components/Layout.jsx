import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <div className="wrapper">
    <Navigation />
    <Outlet />
  </div>
);
export default Layout;
