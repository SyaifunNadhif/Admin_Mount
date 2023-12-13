import React, { useState } from 'react';
import '../css/login.css';
import { json, useNavigate } from 'react-router-dom';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async (e) => {
      e.preventDefault();
  
      try {
        // Lakukan permintaan fetch ke endpoint login
        const response = await fetch('http://localhost:5000/auth/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        });
  
        // Periksa status respons
        if (response.ok) {
          const userData = await response.json();
  
          // Cek basic_type
        //   if (userData.basic_type === 'admin') {
        //     // Berhasil login dan merupakan admin, lakukan sesuatu (navigasi, penyimpanan token, dll.)
        //     console.log('Login success! User is an admin.');
            // localStorage.setItem('User', JSON.stringify(response.data));
            // navigate('/dashboard');
        //   } else {
        //     // Tipe pengguna bukan admin, mungkin tampilkan pesan kesalahan atau lakukan sesuatu yang sesuai
        //     console.error('Login failed. User is not an admin.');
        //   }
            console.log(userData);
            localStorage.setItem('Token', JSON.stringify(userData.data));
            navigate('/dashboard');
        } else {
          // Gagal login, tampilkan pesan kesalahan atau lakukan sesuatu yang sesuai
          console.error('Login failed.');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

  return (
    <>
    <main id='loginpage'>
      <div className="container-fluid d-flex align-items-center vh-100">
        <div className="mx-auto text-white">
          <form onSubmit={login}>
            <div className="mb-3">
              <h3 className="text-center fw-bold mb-4">Login Admin</h3>
            </div>
            <div className="mb-3">
              <label htmlFor="inputname" className="form-label fw-bold">Username</label>
              <input
                type="email"
                className="form-control"
                id="inputname"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </main>
    </>
  );
};
