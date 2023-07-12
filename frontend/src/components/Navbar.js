import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

// Komponen ini menampilkan navigasi untuk menuju 
//halaman beranda, daftar produk, dan tentang kami.

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      navigate('/login');
      window.location.reload();
      alert('Logout successful');
    }
  };

  return (
    <nav className="nabar">
      <div className="navbar-brand">
        <span className="brand-text">Toko Donat</span> <span className="highlight-text">Alvino</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
