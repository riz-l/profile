// Import: Packages
import styled, { keyframes } from "styled-components/macro";

// Animation: blinkOpacity
const blinkOpacity = keyframes`
  50% {
    opacity: 0;
  }
`;

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
  color: #ffffff;
  font-size: 4rem;
  font-weight: 600;
`;

// Element: SubHeading
export const SubHeading = styled.h2`
  color: #ebebeb;
  font-size: 2rem;
  font-weight: 400;
`;

// Element: Grid
export const Grid = styled.section`
  align-items: center;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(3, 1fr);
  height: auto;
  margin: 4rem 0;
  transition: all 150ms linear;
  width: 100%;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// Element: Post
export const Post = styled.div`
  border-left: 8px solid #2ec4b6;
  border-radius: 8px;
  height: 100%;
  position: relative;
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Blink
export const Blink = styled.span`
  animation: ${blinkOpacity} 1s linear infinite;
  opacity: 0;
  transition: all 100ms linear;
  visibility: hidden;
`;

// Element: PostHeading
export const PostHeading = styled.h3`
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 57px;
  border-top-right-radius: 8px;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 400;
  left: 0;
  padding: 0.6rem 1rem;
  position: absolute;
  text-transform: capitalize;
  transition: all 100ms linear;
`;

// Element: Article
export const Article = styled.article`
  background: transparent;
  filter: saturate(0.6);
  height: ${({ noHover }) => (noHover ? "auto" : "40vh")};
  transition: all 100ms linear;
  width: auto;

  &:hover {
    box-shadow: ${({ noHover }) =>
      noHover ? null : "0 11px 8px -9px rgba(0, 0, 0, 0.35)"};
    filter: saturate(1);
    transform: ${({ noHover }) => (noHover ? null : "translateY(-8px)")};
    transition: all 100ms linear;

    & ${Post} {
      border-left: 8px solid #2ec4b6;
      transition: all 100ms linear;
    }

    & ${PostHeading} {
      color: #ff7570;
      transition: all 100ms linear;
    }

    & ${Blink} {
      color: #ff7570;
      opacity: 1;
      transition: all 100ms linear;
      visibility: visible;
    }
  }
`;

// Element: Image
export const Image = styled.img`
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  position: absolute;
  object-fit: cover;
  width: 100%;
`;

// Element: PostLead
export const PostLead = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 10px 10px 0;
  position: relative;
`;

// Element: DateStamp
export const DateStamp = styled.span`
  background: #ffffff;
  color: #2a2a2e;
  padding: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
`;
