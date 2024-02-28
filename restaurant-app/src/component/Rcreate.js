import React, { Component } from 'react';
import Navbarnavbar from './Navbarnavbar';

class Rcreate extends Component {
  constructor(){
    super();
    this.state={
      Name:null,
      Email:null,
      Address:null,
      rating:null
    } 
  }
  create(){
    console.log("hello",JSON.stringify(this.state))
    fetch("http://localhost:3004/restaurants",{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(this.state)
    }).then((result)=>{result.json().then((response)=>{
        console.log("ui",response)
        })
  })
}
  render() {
    return (
      <>
      <Navbarnavbar/>
      <div className='container my-5'>
        <input onChange={(e)=>{this.setState({Name:e.target.value})}} placeholder='name'/><br/><br/>
        <input onChange={(e)=>{this.setState({Email:e.target.value})}} placeholder='email'/><br/><br/>
        <input onChange={(e)=>{this.setState({Address:e.target.value})}} placeholder='address'/><br/><br/>
        <input onChange={(e)=>{this.setState({rating:e.target.value})}} placeholder='rating'/><br/><br/>
        <button onClick={()=>{this.create()}}>add Restaurant</button>
      </div>
      </>
    );
  }
}
export default Rcreate;
