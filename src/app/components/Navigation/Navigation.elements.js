// Import: Packages
import styled, { css } from "styled-components/macro";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

export const Test = styled.div``;

// Element: Container
export const Container = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  height: 200px;
  position: sticky;
  top: 0;
  transform: translateZ(0) scale(1, 1);
  -webkit-transform: translateZ(0) scale(1, 1);
  transition: all 300ms linear;
  width: 100%;
  z-index: 20;

  ${({ scrollDirection, scrollPosition }) =>
    scrollPosition === 0
      ? css`
          background-color: transparent;
        `
      : scrollDirection === "up" && scrollPosition !== 0 && scrollPosition > 40
      ? css`
          background-color: white;
          box-shadow: 0 11px 8px -9px rgba(0, 0, 0, 0.35);
        `
      : scrollDirection === "down" && scrollPosition > 80
      ? css`
          background-color: transparent;
          opacity: 0;
        `
      : css`
          background-color: transparent;
          opacity: 0;
        `};
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
  font-family: "Pacifico", sans-serif;
  font-size: 6rem;
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0) scale(1, 1);
  -webkit-transform: translateZ(0) scale(1, 1);
  transition: all 100ms linear;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  ${({ scrollDirection, scrollPosition }) =>
    scrollPosition === 0
      ? css`
          color: #ffffff;
        `
      : scrollDirection === "up" && scrollPosition !== 0 && scrollPosition > 40
      ? css`
          color: #0a0a0b;
        `
      : css`
          color: #ffffff;
        `};

  &:hover {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
    -webkit-transform: translateZ(0) scale(1, 1);
    transition: all 100ms linear;

    ${({ scrollDirection, scrollPosition }) =>
      scrollPosition === 0
        ? css`
            color: #ff7570;
          `
        : scrollDirection === "up" &&
          scrollPosition !== 0 &&
          scrollPosition > 40
        ? css`
            color: #ff7570;
          `
        : css`
            color: #ff7570;
          `};
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

  ${({ scrollDirection, scrollPosition }) =>
    scrollPosition === 0
      ? css`
          color: #ebebeb;
        `
      : scrollDirection === "up" && scrollPosition !== 0 && scrollPosition > 40
      ? css`
          color: #2a2a2e;
        `
      : css`
          color: #ebebeb;
        `};

  &.${activeClassName} {
    ${({ scrollDirection, scrollPosition }) =>
      scrollPosition === 0
        ? css`
            color: #ffffff;
          `
        : scrollDirection === "up" &&
          scrollPosition !== 0 &&
          scrollPosition > 40
        ? css`
            color: #0a0a0b;
          `
        : css`
            color: #ffffff;
          `};

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
    transition: all 100ms linear;

    ${({ scrollDirection, scrollPosition }) =>
      scrollPosition === 0
        ? css`
            color: #ffffff;
          `
        : scrollDirection === "up" &&
          scrollPosition !== 0 &&
          scrollPosition > 40
        ? css`
            color: #0a0a0b;
          `
        : css`
            color: #ffffff;
          `};

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

  ${({ scrollDirection, scrollPosition }) =>
    scrollPosition === 0
      ? css`
          color: #ffffff;
          border: 2px solid #ffffff;
        `
      : scrollDirection === "up" && scrollPosition !== 0 && scrollPosition > 40
      ? css`
          color: #2a2a2e;
          border: 2px solid #2a2a2e;
        `
      : css`
          color: #ffffff;
          border: 2px solid #ffffff;
        `};

  &:hover {
    border-radius: 80px;
    box-shadow: 0 11px 8px -9px rgba(0, 0, 0, 0.35);
    transition: background-color 100ms linear, border 100ms linear,
      color 100ms linear, box-shadow 100ms linear, border-radius 300ms linear;

    ${({ scrollDirection, scrollPosition }) =>
      scrollPosition === 0
        ? css`
            background-color: #ffffff;
            border: 2px solid #ffffff;
            color: #ff7570;
          `
        : scrollDirection === "up" &&
          scrollPosition !== 0 &&
          scrollPosition > 40
        ? css`
            background-color: #0a0a0b;
            border: 2px solid #0a0a0b;
            color: #ffffff;
          `
        : css`
            background-color: #ffffff;
            border: 2px solid #ffffff;
            color: #ff7570;
          `};
  }
`;
