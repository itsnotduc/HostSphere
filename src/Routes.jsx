import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Billings from './pages/Billings';
import Domains from './pages/Domains';
import EmailAccounts from './pages/EmailAccounts';
import FileManager from './pages/FileManager';
import Security from './pages/Security';
import Settings from './pages/Settings';
import Help from './pages/Help';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout title="Home"><Dashboard /></Layout>} />
      <Route path="/dashboard" element={<Layout title="Dashboard"><Dashboard /></Layout>} />
      <Route path="/billings" element={<Layout title="Billings"><Billings /></Layout>} />
      <Route path="/domains" element={<Layout title="Domains"><Domains /></Layout>} />
      <Route path="/email-accounts" element={<Layout title="Email Accounts"><EmailAccounts /></Layout>} />
      <Route path="/file-manager" element={<Layout title="File Manager"><FileManager /></Layout>} />
      <Route path="/security" element={<Layout title="Security"><Security /></Layout>} />
      <Route path="/settings" element={<Layout title="Settings"><Settings /></Layout>} />
      <Route path="/help" element={<Layout title="Help"><Help /></Layout>} />
      <Route path="*" element={<Layout title="Not Found"><h1>404: Not Found</h1></Layout>} />
    </Routes>
  );
};

export default AppRoutes;
