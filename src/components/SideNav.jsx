import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.svg';
import arrowRightIcon from '../assets/arrow-right.svg';
import dashboardIcon from '../assets/dashboard.svg';
import billingsIcon from '../assets/billings.svg';
import domainsIcon from '../assets/domains.svg';
import emailAccountsIcon from '../assets/email-accounts.svg';
import fileManagerIcon from '../assets/file-manager.svg';
import securityIcon from '../assets/security.svg';
import settingsIcon from '../assets/settings.svg';
import helpIcon from '../assets/help.svg';
import settingsDotIcon from '../assets/settings-dot.svg';
import '../App.css';

const SideNav = ({ isSidebarOpen, handleClick }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <nav>
        <div className="icon-wrapper">
          <img 
            src={logoIcon} 
            alt="logo" 
            className="sidebar-logo"
          />
          <span className="sidebar-logo-text">HostSphere</span>
        </div>
        <div className='menu-button' onClick={handleClick}>
          <img 
            src={arrowRightIcon} 
            alt="menu" 
            className="arrow-icon"
          />
        </div>
        <ul>
          <li>
            <Link to="/dashboard">
              <img className="sidebar-icon icon-dashboard" src={dashboardIcon} alt="Dashboard" />
              <span className="link-text">DASHBOARD</span>
            </Link>
          </li>
          <li>
            <Link to="/billings">
              <img className="sidebar-icon icon-billings" src={billingsIcon} alt="Billings" />
              <span className="link-text">BILLINGS</span>
            </Link>
          </li>
          <li>
            <Link to="/domains">
              <img className="sidebar-icon icon-domains" src={domainsIcon} alt="Domains" />
              <span className="link-text">DOMAINS</span>
            </Link>
          </li>
          <li>
            <Link to="/email-accounts">
              <img className="sidebar-icon icon-email-accounts" src={emailAccountsIcon} alt="Email Accounts" />
              <span className="link-text">EMAIL ACCOUNTS</span>
            </Link>
          </li>
          <li>
            <Link to="/file-manager">
              <img className="sidebar-icon icon-file-manager" src={fileManagerIcon} alt="File Manager" />
              <span className="link-text">FILE MANAGER</span>
            </Link>
          </li>
          <li>
            <Link to="/security">
              <img className="sidebar-icon icon-security" src={securityIcon} alt="Security" />
              <span className="link-text">SECURITY</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <img className="sidebar-icon" src={settingsIcon} alt="Settings" />
              <span className="link-text">SETTINGS</span>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <img className="sidebar-icon" src={helpIcon} alt="Help" />
              <span className="link-text">HELP</span>
            </Link>
          </li>
        </ul>
        <div className='sidebar-footer'>
          <img src='https://api.dicebear.com/9.x/initials/svg?radius=10&seed=JD&scale=70&size=50&fontFamily=Helvetica'></img>
          <div className={`flex justify-between items-center w-52 ml-3`}>
            <div className='user-text'>
              <p className='text-base font-semibold'>John Doe</p>
              <p className='text-xs text-gray-400'>johndoe@example.com</p>
            </div>
            <img className="sidebar-icon" src={settingsDotIcon} alt="settings dot" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
