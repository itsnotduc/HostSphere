import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';
import '../App.css';

const Layout = ({ title, children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <SideNav isSidebarOpen={isSidebarOpen} handleClick={handleClick} />
      <TopNav toggleTheme={toggleTheme} />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
