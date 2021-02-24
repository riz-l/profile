// Import: Packages
import styled, { keyframes } from "styled-components/macro";

// Animation: blinkOpacity
const blinkOpacity = keyframes`
  50% {
    opacity: 0;
  }`;

// Element: Container
export const Container = styled.main`
  height: auto;
  min-height: calc(100vh - 200px);
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  width: 78%;
`;

// Element: Heading
export const Heading = styled.h1`
  background-color: #ffffff;
  border-radius: 8px;
  color: #2a2a2e;
  font-size: 4rem;
  font-weight: 600;
  padding: 1rem 2rem;
  position: absolute;
  z-index: 2;
`;

// Element: Content
export const Content = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 4rem;
  width: 100%;
`;

// Element: Blink
export const Blink = styled.span`
  animation: ${blinkOpacity} 1s linear infinite;
  opacity: 0;
  transition: all 100ms linear;
  visibility: hidden;
`;

// Element: ReturnButton
export const ReturnButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: auto;
  justify-content: center;
  margin-bottom: 2rem;
  margin-right: auto;

  &:hover {
    & span {
      color: #ff7570;
      transition: all 100ms linear;

      & ${Blink} {
        opacity: 1;
        transition: all 100ms linear;
        visibility: visible;
      }
    }
  }

  & span {
    color: #2a2a2e;
    font-size: 1.8rem;
    font-weight: 600;
    transition: all 100ms linear;
  }
`;

// Element: Header
export const Header = styled.header`
  align-items: center;
  display: flex;
  flex: auto;
  height: 350px;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
`;

// Element: HeaderImage
export const HeaderImage = styled.img`
  background-position: center;
  border-radius: 8px;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

// Element: Author
export const Author = styled.div`
  align-items: center;
  background-color: #2ec4b6;
  border-radius: 8px;
  bottom: 1rem;
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  position: absolute;
  right: 1rem;
  z-index: 2;
`;

// Element: AuthorImage
export const AuthorImage = styled.img`
  border-radius: 80%;
  height: 35px;
  margin-right: 1rem;
  width: 35px;
`;

// Element: AuthorName
export const AuthorName = styled.h4`
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 1rem;
`;

// Element: AuthorDate
export const AuthorDate = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 400;
`;

// Element: Prose
export const Prose = styled.div`
  color: #44444b;
  font-size: 1rem;
  height: 100%;
  line-height: 1.75;
  width: 100%;

  & p {
    margin-bottom: 1.25em;
    margin-top: 1.25em;
  }

  & ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & ul {
    margin-bottom: 1.25em;
    margin-top: 1.25em;

    & li {
      padding-left: 1.75em;
      position: relative;

      &::before {
        background-color: #6b6b76;
        border-radius: 50%;
        content: "";
        height: 0.375em;
        left: 0.25em;
        position: absolute;
        top: calc(0.875em - 0.1875em);
        width: 0.375em;
      }
    }
  }

  & li {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
  }

  & figure {
    margin-bottom: 2em;
    margin-top: 2em;

    & img {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  & img {
    border-radius: 8px;
    display: block;
    height: auto;
    max-height: 500px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
  }

  & blockquote {
    border-bottom-left-radius: 4px;
    border-left: 4px solid #2ec4b6;
    border-top-left-radius: 4px;
    color: #1d1d20;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1.6em;
    margin-top: 1.6em;
    padding-left: 1em;
  }
`;
