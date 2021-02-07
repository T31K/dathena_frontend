import React from "react";
import { Navbar, Nav, Button, NavDropdown, FormControl, Form } from "react-bootstrap";

export default function  Navbars(){
  return(
  <>
  <Navbar bg="light">
    <Navbar.Brand href="/">
      <img
        src="/logo.png"
        width="150"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/update">Update</Nav.Link>
    </Nav>
  </Navbar>
  </>
  )
}
