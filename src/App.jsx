import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Billings from './components/Billings';
import Domains from './components/Domains';
import EmailAccounts from './components/EmailAccounts';
import FileManager from './components/FileManager';
import Security from './components/Security';
import Settings from './components/Settings';
import Help from './components/Help';

const App = () => {
  return (
    <div className="app">
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
    </div>
  );
};

export default App;

