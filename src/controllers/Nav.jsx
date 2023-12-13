import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css/nav.css'

export const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Menghapus token dari penyimpanan lokal saat logout
    localStorage.removeItem('Token');

    // Navigasi ke halaman login setelah logout
    navigate('/');
  };

  



  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#">Admin Mount Ungaran</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link nav-menu" aria-current='page' activeclassname='active' to='/dashboard'>Dashborad</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-menu" aria-current='page' activeclassname='active' to='/transaksi'>Transaksi</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link nav-menu" aria-current='page' activeclassname='active' to='/content'>Content</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger btn-sm px-2 py-1 ms-5" aria-disabled="true" onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    
    </>
  )
}

