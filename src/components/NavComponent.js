import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Login from './Login';
import BookList from './BookList';
import Home from './Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavComponent() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar variant="dark" style={{ backgroundColor: "#580837" }}>
                        <Container>
                            <Navbar.Brand href="/">Books</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">About</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/books">
                            <BookList />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </div>
            </Router>
        </>
    )
}

export default NavComponent;