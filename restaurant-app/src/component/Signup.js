import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarnavbar from './Navbarnavbar';

export default function Signup() {
  // useEffect(() => {
  //   if (localStorage.getItem("signup")) {
  //     navigate("/list")
  //   }
  // }, [])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  async function signup() {
    let response = await fetch("http://localhost:3004/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
   const result = await response.json();
    console.log("result", result)
    localStorage.setItem("signup", JSON.stringify(result))
    navigate("/list")
  }
  return (
    <>
      <Navbarnavbar />
      <div className='container my-5'>
        <input type='text' name='Email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br /><br />
        <input type='text' name='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <button onClick={() => signup()}>signup</button>
      </div>
    </>
  );
}
