import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-16 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;