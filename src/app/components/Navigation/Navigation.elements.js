// Import: Packages
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

// Element: Container
export const Container = styled.div`
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "rgb(25,24,31,0.90)"};
  box-shadow: ${({ isTransparent }) =>
    isTransparent ? null : "0 11px 8px -9px rgba(0,0,0,0.35)"};
  height: 200px;
  min-height: 200px;
  position: sticky;
  top: 0;
  transition: all 150ms linear;
  width: 100%;
  z-index: 20;
`;

// Element: Nav
export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto;
  position: relative;
  width: 78%;
`;

// Element: Logo
export const Logo = styled.span`
  color: #ffffff;
  font-family: "Pacifico", sans-serif;
  font-size: 6rem;
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`;

// Element: NavContainer
export const NavContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

// Element: NavItem
export const NavItem = styled(NavLink).attrs({ activeClassName })`
  align-items: center;
  border: 1px solid rgba(29, 29, 29, 0);
  border-radius: 4px;
  color: #e9e8ed;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  height: auto;
  justify-content: center;
  margin: 0 8px;
  padding: 0.6rem 1rem;
  position: relative;
  transition: all 100ms linear;

  &:after {
    background: #ffffff;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    transition: all 150ms ease-in-out;
    width: 0;
  }

  &:hover {
    color: #ffffff;
    transition: all 100ms linear;

    &:after {
      left: 0;
      transition: all 150ms ease-in-out;
      width: 100%;
    }
  }
`;

// Element: NavItemCta
export const NavItemCta = styled(NavLink).attrs({ activeClassName })`
  align-items: center;
  background-color: transparent;
  border: 2px solid #f2f2f2;
  color: #f2f2f2;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  height: auto;
  justify-content: center;
  margin: 0 8px 0 1.4rem;
  padding: 0.6rem 1.4rem;
  position: relative;
  transition: all 100ms linear;

  &:hover {
    background-color: #f2f2f2;
    border: 2px solid #f2f2f2;
    color: #19181f;
    transition: all 100ms linear;
  }
`;
