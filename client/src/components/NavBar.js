import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  // function handleNewDocClick() {
  //   fetch()
  // }

  return (
    <Wrapper className="nav">
      <Logo>
        <Link to="/">handwriting➲text</Link>
      </Logo>
      <Nav>
        
        <Button as={Link} to="/new">
          New Doc
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 8px;
  
`;

const Logo = styled.h1`
  // font-family: "Permanent Marker", sans-serif;
  // font-size: 2rem;
  // color: #22C3B3;
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
//   color: #30C3B3;

  color: #363636;
  margin: 0;
  line-height: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;