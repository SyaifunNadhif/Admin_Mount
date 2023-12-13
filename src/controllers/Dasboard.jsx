import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'

export const Dasboard = () => {
  const [userData, setUserData] = useState(null);

  const whoami = async () => {
    try{
      const token = JSON.parse(localStorage.getItem('Token')).token;
      console.log(token);
      const response = await fetch('http://localhost:5000/auth/whoami/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
      });
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData.data);
        console.log(userData);
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    }catch(e){
      (e)
    }
  }


  useEffect(() => {
    // Panggil fungsi whoami saat komponen dipasang

    whoami();
  }, []); 
  return (
    <>
      <Nav/>
      
      <div className="container mt-4">
        {userData && (
          <div>
            <h2>User Information</h2>
            <p>ID: {userData.id}</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>User Type: {userData.user_type}</p>
          </div>
        )}
      </div>
    </>
  )
}
