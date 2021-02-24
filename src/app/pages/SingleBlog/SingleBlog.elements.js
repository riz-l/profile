// Import: Packages
import styled from "styled-components/macro";

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

// Element: Const
export const Content = styled.div`
  align-items: center;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 4rem;
  width: 100%;
`;

// Element: Header
export const Header = styled.header`
  background: pink;
  align-items: center;
  display: flex;
  flex: auto;
  height: 300px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

// Element: HeaderImage
export const HeaderImage = styled.img`
  border-radius: 8px;
  max-height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  background-position: center;
  z-index: 1;
`;

// Element: Author
export const Author = styled.div`
  align-items: center;
  background-color: #2ec4b6;
  border-radius: 8px;
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
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
