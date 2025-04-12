// src/App.jsx
import React from 'react';
import FDReduxManager from './components/FDReduxManager';
import RDReduxManager from './components/RDReduxManager';
import NotificationComponent from './components/NotificationComponent';
import { FaPiggyBank, FaRegCalendarCheck, FaBell } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Enhanced styling

const App = () => {
  return (
    <div className="app-gradient min-vh-100 py-5 px-3">
      <div className="container">
        {/* Header */}
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold">💰 FD/RD Redux Tracker</h1>
          <p className="lead">Track your savings smartly with live status and elegant visuals.</p>
        </div>

        {/* Main Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="glass-card border-success text-white shadow">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <FaPiggyBank size={28} className="me-3 text-warning" />
                  <h4 className="fw-bold">Fixed Deposit Manager</h4>
                </div>
                <FDReduxManager />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="glass-card border-info text-white shadow">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <FaRegCalendarCheck size={28} className="me-3 text-info" />
                  <h4 className="fw-bold">Recurring Deposit Manager</h4>
                </div>
                <RDReduxManager />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card border-warning text-white shadow">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <FaBell size={24} className="me-3 text-warning" />
              <h4 className="fw-bold">Notifications</h4>
            </div>
            <NotificationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
