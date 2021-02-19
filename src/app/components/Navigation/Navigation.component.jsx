// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import: Elements
import {
  Container,
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavItemCta,
} from "./Navigation.elements";

// Component: Navigation
export default function Navigation() {
  // State: scrollPosition, isTransparent
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  // Checks for current window.scrollY position
  // ... sets scrollPosition === window.scrollY
  document.addEventListener("scroll", () => {
    setScrollPosition(window.scrollY);
  });

  // Effect: If scrollPosition exceeds Navigation height
  // ... setIsTransparent === true
  useEffect(() => {
    scrollPosition < 20 ? setIsTransparent(true) : setIsTransparent(false);
  }, [scrollPosition]);

  return (
    <>
      <Container isTransparent={isTransparent}>
        <Nav>
          <Link to="/">
            <Logo>riz</Logo>
          </Link>

          <NavContainer>
            <NavItem to="/">
              <span>Home</span>
            </NavItem>

            <NavItem to="/projects">
              <span>Projects</span>
            </NavItem>

            <NavItem to="/blog">
              <span>Blog</span>
            </NavItem>

            <NavItem to="/about">
              <span>About</span>
            </NavItem>

            <NavItemCta to="/contact">
              <span>Contact</span>
            </NavItemCta>
          </NavContainer>
        </Nav>
      </Container>
    </>
  );
}
