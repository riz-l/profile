// Import: Packages
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Import: Elements
import {
  Container,
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavItemCta,
} from "./Navigation.elements";

// Import: Components
// import { ThemeToggle } from "../index";

// Component: Navigation
export default function Navigation({
  isDarkTheme,
  setIsDarkTheme,
  isNavigationOpen,
  setIsNavigationOpen,
}) {
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
    scrollPosition >= 22 ? setIsTransparent(false) : setIsTransparent(true);
  }, [scrollPosition]);

  return (
    <>
      <Container isTransparent={isTransparent}>
        <Nav>
          <NavLink to="/" exact>
            <Logo isTransparent={isTransparent}>riz</Logo>
          </NavLink>

          <NavContainer>
            <NavItem isTransparent={isTransparent} to="/" exact>
              <span>Home</span>
            </NavItem>

            <NavItem isTransparent={isTransparent} to="/projects">
              <span>Projects</span>
            </NavItem>

            <NavItem isTransparent={isTransparent} to="/blog">
              <span>Blog</span>
            </NavItem>

            <NavItem isTransparent={isTransparent} to="/about">
              <span>About</span>
            </NavItem>

            {/* <ThemeToggle
              isOn={isDarkTheme}
              handleToggle={() => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
                localStorage.setItem(
                  "isDarkTheme",
                  (isDarkTheme) => !isDarkTheme
                );
              }}
              onColor="#06d6A0"
            /> */}

            <NavItemCta isTransparent={isTransparent} to="/contact">
              <span>Contact</span>
            </NavItemCta>
          </NavContainer>
        </Nav>
      </Container>
    </>
  );
}
