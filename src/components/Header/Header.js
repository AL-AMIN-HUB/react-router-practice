import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const styleNaveLink = {
    textDecoration: "none",
    fontSize: "20px",
    marginRight: "10px",
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavLink
              style={styleNaveLink}
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Home
            </NavLink>
            <NavLink
              style={styleNaveLink}
              to="/restaurants"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Restaurants
            </NavLink>
            <NavLink
              style={styleNaveLink}
              to="/meal"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Meal
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2 pe-5" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
