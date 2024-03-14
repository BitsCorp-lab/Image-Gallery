import React, { ReactNode } from 'react';
import BottomBar from '../Components/BottomBar/BottomBar';
import Navbar from '../Components/Navbar/Navbar';
import './AppLayout.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="layoutCon">
      <div className="navbarCon">
        <Navbar />
      </div>
      <div className="contentCon scrollbarStyle">{children}</div>
      <BottomBar />
    </div>
  );
};

export default AppLayout;

