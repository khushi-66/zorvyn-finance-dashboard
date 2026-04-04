import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import  finance from './assets/finance.jpg'
import '../src/App.css';
  export default function App() {
  const location = useLocation();
  const ishomepage = location.pathname === "/";

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Main Content */}
      <div className="container-fluid flex-grow-1">

        {/* Navbar */}
        <div className="d-flex justify-content-between align-items-center mt-3">

          <h5 className="fw-bold text-primary m-0">
            <i className="bi bi-currency-rupee me-1"></i>
            Finance Dashboard
          </h5>

          <div>
            <Link to="/" className="btn btn-primary me-2">
              <i className="bi bi-house-fill me-2"></i>
              Home
            </Link>
            <Link to="/dashboard" className="btn btn-primary me-2">
              <i className="bi bi-speedometer2 me-2"></i>
              Dashboard
            </Link>


            <Link to="/transaction" className="btn btn-success me-2">
              <i className="bi bi-list-ul me-2"></i>
             All Transactions
            </Link>

            <Link to="/insights" className="btn btn-dark">
              <i className="bi bi-graph-up-arrow me-2"></i>
              Insights
            </Link>
          </div>
        </div>

        {/* 🔥 Homepage Hero */}
        {ishomepage && (
          <div className="text-center mt-5">
            <h2 className="fw-bold">Welcome to Finance Dashboard</h2>
            <p className="text-muted">Track. Analyze. Grow your finances.</p>

            <div className="mt-4">
    <img
      src={finance}
      className="img-fluid rounded shadow"
      style={{ maxHeight: "300px" }}
    />
  </div>

  {/* Button */}
  <div className="mt-4">
    <Link to="/dashboard" className="btn btn-primary px-4 fs-4">
      Get Started
      <i className="bi bi-arrow-right ms-2 fs-4"></i>
    </Link>
  </div>
          </div>
        )}

        {/* 🔥 Outlet MUST be here */}
        <Outlet />

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}