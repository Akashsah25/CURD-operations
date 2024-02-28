import React, { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbarnavbar from './Navbarnavbar';

export default function Rupdate() {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Address, setAddress] = useState("")
  const [Rating, setRating] = useState("")
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3004/restaurants/${id}`).then((response) => {
      response.json().then((result) => {
        console.log(result)
        setName(result.Name)
        setAddress(result.Address)
        setEmail(result.Email)
        setRating(result.Rating)
      })
    })
  }, [])
  function update(){
    fetch(`http://localhost:3004/restaurants/${id}`,{
      method:"put",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({Name,Address,Email,Rating})
    }).then((result)=>{result.json().then((response)=>{
        console.log(response)})
  })
  }
  return (
    <>
    <Navbarnavbar/>
      <div className='container my-5'>
        <input value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='name' /><br /><br />
        <input value={Address} onChange={(e) => { setAddress(e.target.value) }} placeholder='address' /><br /><br />
        <input value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder='email' /><br /><br />
        <input value={Rating} onChange={(e) =>  setRating(e.target.value) } placeholder='rating' /><br /><br />
        <button onClick={()=>{update()}}>add Restaurant</button>
      </div>
    </>
  );
}
