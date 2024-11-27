import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

import {useNavigate} from "react-router-dom"

const NavbarComponent = () => {
let Home = useNavigate ()

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroudColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(()=> {
    changeBackgroudColor();

    window.addEventListener('scroll', changeBackgroudColor)
  })

  return (
    <div>
      <Navbar expand="lg" fixed="top" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold" onClick={() => Home("/")}>
            BelajarYukk.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <buttonv className="btn btn-outline-danger rounded-1">
                Join With US
              </buttonv>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
