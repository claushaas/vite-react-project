// src/components/layout/index.tsx

import { Outlet } from 'react-router-dom';
import NavBar from '../Nav-bar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  );
}

export default Layout;
