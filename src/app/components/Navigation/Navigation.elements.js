// Import: Packages
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

// Element: Container
export const Container = styled.div`
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "rgba(255,255,255,1)"};
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: ${({ isTransparent }) =>
    isTransparent ? null : "0 11px 8px -9px rgba(0,0,0,0.35)"};
  height: 200px;
  height: ${({ isTransparent }) => (isTransparent ? "200px" : "80px")};
  position: sticky;
  top: 0;
  transform: translateZ(0) scale(1, 1);
  -webkit-transform: translateZ(0) scale(1, 1);
  transition: all 100ms linear;
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
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  color: ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#0a0a0b")};
  font-family: "Pacifico", sans-serif;
  font-size: ${({ isTransparent }) => (isTransparent ? "6rem" : "3.4rem")};
  height: auto;
  left: ${({ isTransparent }) => (isTransparent ? "0" : "0")};
  position: absolute;
  top: ${({ isTransparent }) => (isTransparent ? "0" : "-14px")};
  transform: translateZ(0) scale(1, 1);
  -webkit-transform: translateZ(0) scale(1, 1);
  transition: all 100ms linear;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  &:hover {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    color: ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#0a0a0b")};
    transform: translateZ(0) scale(1, 1);
    -webkit-transform: translateZ(0) scale(1, 1);
    transition: all 100ms linear;
  }
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
  color: ${({ isTransparent }) => (isTransparent ? "#ebebeb" : "#2a2a2e")};
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

  &.${activeClassName} {
    color: ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#0a0a0b")};

    &:hover {
      &:after {
        background: #ff7570;
      }
    }

    &:after {
      background: #ff5851;
      border-radius: 80px;
      bottom: 0;
      content: "";
      display: block;
      height: 4px;
      left: 0;
      position: absolute;
      transition: all 150ms ease-in-out;
      width: 100%;
    }
  }

  &:after {
    background: #ff7570;
    border-radius: 80px;
    bottom: 0;
    content: "";
    display: block;
    height: 4px;
    left: 50%;
    position: absolute;
    transition: all 150ms ease-in-out;
    width: 0;
  }

  &:hover {
    color: ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#0a0a0b")};
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
  border: 2px solid
    ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#2a2a2e")};
  color: ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#2a2a2e")};
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
    background-color: ${({ isTransparent }) =>
      isTransparent ? "#ffffff" : "#0a0a0b"};
    border: 2px solid
      ${({ isTransparent }) => (isTransparent ? "#ffffff" : "#0a0a0b")};
    border-radius: 80px;
    box-shadow: 0 11px 8px -9px rgba(0, 0, 0, 0.35);
    color: ${({ isTransparent }) => (isTransparent ? "#0a0a0b" : "#ffffff")};
    transition: background-color 100ms linear, border 100ms linear,
      color 100ms linear, box-shadow 100ms linear, border-radius 300ms linear;
  }
`;
