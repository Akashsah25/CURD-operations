import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'

function Navbarnavbar() {
    const navigate = useNavigate()
    function logout() {
        localStorage.clear("signup")
        navigate("/")
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">{

                        localStorage.getItem("signup") ?
                            <>
                                <Nav.Link href="#features"><Link to="/search">Search</Link></Nav.Link>
                                <Nav.Link href="#pricing"><Link to="/list">List</Link></Nav.Link>
                                <Nav.Link href="#pricing"><Link to="/create">Create</Link></Nav.Link>
                            </> :
                            <><Nav.Link href="#pricing"><Link to="/signup">signup</Link></Nav.Link>
                                <Nav.Link href="#pricing"><Link to="/login">login</Link></Nav.Link>
                            </>
                    }
                    </Nav>
                    <Nav>{
                        localStorage.getItem("signup") ?
                            <>
                                <Nav.Link href="#pricing" onClick={() => logout()}>Logout</Nav.Link>
                            </> : null
                    }
                    </Nav>
                </Container>
            </Navbar>
        </>)
}
export default Navbarnavbar;