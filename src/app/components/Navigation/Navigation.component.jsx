// Import: Packages
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useScrollDirection } from "../../../utils/hooks/useScrollDirection";

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
  const scrollDirection = useScrollDirection();

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
    scrollPosition > 600 ? setIsTransparent(false) : setIsTransparent(true);
  }, [scrollPosition]);

  return (
    <>
      <Container
        data-testid={"navigation"}
        scrollPosition={scrollPosition}
        scrollDirection={scrollDirection}
      >
        <Nav>
          <NavLink to="/" exact>
            <Logo
              scrollPosition={scrollPosition}
              scrollDirection={scrollDirection}
            >
              riz
            </Logo>
          </NavLink>

          <NavContainer>
            <NavItem
              scrollPosition={scrollPosition}
              scrollDirection={scrollDirection}
              to="/"
              exact
            >
              <span>Home</span>
            </NavItem>

            <NavItem
              scrollPosition={scrollPosition}
              scrollDirection={scrollDirection}
              to="/projects"
            >
              <span>Projects</span>
            </NavItem>

            <NavItem
              scrollPosition={scrollPosition}
              scrollDirection={scrollDirection}
              to="/blog"
            >
              <span>Blog</span>
            </NavItem>

            <NavItem
              scrollPosition={scrollPosition}
              scrollDirection={scrollDirection}
              to="/about"
            >
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

            <NavItemCta
              scrollPosition={scrollPosition}
              scrollDirection={scrollDirection}
              to="/contact"
            >
              <span>Contact</span>
            </NavItemCta>
          </NavContainer>
        </Nav>
      </Container>
    </>
  );
}
