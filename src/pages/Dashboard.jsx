import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardChart from '../components/DashboardChart';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout flex flex-col w-full p-4">
      <DashboardHeader />
      <div className="chart-container mt-4">
        <DashboardChart />
      </div>
    </div>
  );
};

export default Dashboard;
