import { useState } from 'react'
import hamburgerIcon from './assets/hamburger.svg'
import dashboardIcon from './assets/dashboard.svg'
import billingsIcon from './assets/billings.svg'
import domainsIcon from './assets/domains.svg'
import emailAccountsIcon from './assets/email-accounts.svg'
import fileManagerIcon from './assets/file-manager.svg'
import securityIcon from './assets/security.svg'
import logoIcon from './assets/logo.svg'
import './App.css'

function App() {
  const [isRotated, setIsRotated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (e) => {
    setIsRotated(!isRotated);
    setSidebarOpen(!isSidebarOpen);
    e.currentTarget.classList.toggle('clicked');
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <div className="icon-wrapper">
            <img
              src={hamburgerIcon}
              alt="menu"
              className="navbar-icon"
              onClick={handleClick}
            />
            <img 
              src={logoIcon} 
              alt="logo" 
              className="sidebar-logo"
            />
            <span className="sidebar-logo-text">HostSphere</span>
          </div>
          <ul>
            <li>
              <img className="sidebar-icon icon-dashboard" src={dashboardIcon}></img>
              <a href="#" className="link-text">DASHBOARD</a>
            </li>
            <li>
              <img className="sidebar-icon icon-billings" src={billingsIcon}></img>
              <a href="#" className="link-text">BILLINGS</a>
            </li>
            <li>
              <img className="sidebar-icon icon-domains" src={domainsIcon}></img>
              <a href="#" className="link-text">DOMAINS</a>
            </li>
            <li>
              <img className="sidebar-icon icon-email-accounts" src={emailAccountsIcon}></img>
              <a href="#" className="link-text">EMAIL ACCOUNTS</a>
            </li>
            <li>
              <img className="sidebar-icon icon-file-manager" src={fileManagerIcon}></img>
              <a href="#" className="link-text">FILE MANAGER</a>
            </li>
            <li>
              <img className="sidebar-icon icon-security" src={securityIcon}></img>
              <a href="#" className="link-text">SECURITY</a>
            </li>
          </ul>
          <div className='sidebar-footer'>
            <img src='https://api.dicebear.com/9.x/initials/svg?radius=10&seed=JD&scale=70&size=50&fontFamily=Helvetica'></img>
            <div className={`flex justify-between items-center w-52 ml-3`}>
              <div>
                <p className='text-base font-semibold'>John Doe</p>
                <p className='text-xs text-gray-400'>johndoe@example.com</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="navbar">
        <div className="nav-links">
          <a href="#">OVERVIEW</a>
          <a href="#">SERVICES</a>
          <a href="#">SUPPORT</a>
        </div>
      </div>
    </div>
  )
}

export default App

