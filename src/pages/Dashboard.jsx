import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/SideNav';
import Topbar from '../components/TopNav';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <div className="main-content flex flex-col w-full">
        <div className="content">
          <DashboardHeader />
          {/* Add Dashboard widgets and components here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
