import {React,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarnavbar from './Navbarnavbar';

export default function Login() {
    const navigate=useNavigate();
      useEffect(()=>{if(localStorage.getItem("signup")){
        navigate("/list")
      }},[])
  return (
    <> 
    <Navbarnavbar/>
    <div className='text-center'>
      <h1>login page</h1>
    </div>
    </>
  );
}
