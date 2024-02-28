import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbarnavbar from './Navbarnavbar';

class Rlist extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    }
  }
  getdata(){
    fetch("http://localhost:3004/restaurants").then((response) => {
      response.json().then((result) => { this.setState({ list: result }) })
    })
  }
  componentDidMount() {
    this.getdata()
  }
  delete(id) {
    fetch(`http://localhost:3004/restaurants/${id}`,{
      method:"DElETE",
      body: JSON.stringify(this.state)
    }).then((result)=>{result.json().then((response)=>{
        console.log(response)})
        this.getdata()
  })
  }
  render() {
    return (
      <><Navbarnavbar/>
      <div>
        <h1>Restaurant list</h1>
        {
          this.state.list ?
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>operation</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map((item) =>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Address}</td>
                        <td>{item.Email}</td>
                        <td>{item.Rating}</td>
                        <td>{<Link to={"/update/"+item.id}>Update</Link>}</td>
                        <td onClick={()=>this.delete(item.id)}>Delete</td>
                      </tr>
                    )
                    }
                </tbody>
              </Table>
            </div>
            : <h1>please wait</h1>
        }
      </div>
      </>
    );
  }
}
export default Rlist;
