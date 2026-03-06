import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ padding: '24px 64px', backgroundColor: '#F7F7F7', borderBottom: '1px solid #DADDE1' }}>
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {/* Logo veya Marka İsmi */}
          <strong style={{ fontSize: '24px', marginRight: 'auto' }}>TravelTrucks</strong>
          
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ textDecoration: 'none', fontWeight: 'bold', color: isActive ? '#E44848' : '#101828' })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/catalog" 
            style={({ isActive }) => ({ textDecoration: 'none', fontWeight: 'bold', color: isActive ? '#E44848' : '#101828' })}
          >
            Catalog
          </NavLink>
        </nav>
      </header>

      {/* Alt sayfalar (Home, Catalog, Details) Outlet içine render edilir */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;