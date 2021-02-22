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
  grid-template-columns: repeat(1, 1fr);
  height: auto;
  margin: 4rem 0;
  transition: all 150ms linear;
  width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// ==========================================================
// ==========================================================
// ==========================================================
// TEST
// ==========================================================
// ==========================================================
// ==========================================================

// Element: Post
export const Post = styled.div`
  border-left: 8px solid #ff5851;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  position: relative;
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Article
export const Article = styled.article`
  background: transparent;
  height: 30vh;
  transition: all 100ms linear;
  width: auto;

  &:hover {
    box-shadow: 0 11px 8px -9px rgba(0, 0, 0, 0.35);
    transition: all 100ms linear;

    & ${Post} {
      border-left: 8px solid #ff7570;
      transition: all 100ms linear;
    }
  }
`;

// Element: Image
export const Image = styled.img`
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
  height: 100%;
  justify-content: flex-end;
  padding: 0 10px 10px 0;
  position: relative;
`;

// Element: PostHeading
export const PostHeading = styled.h3`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 2rem;
  font-weight: 400;
  left: 0;
  padding: 1.4rem 2.4rem 1.4rem 1.4rem;
  position: absolute;
  text-transform: capitalize;
`;

// Element: PortfolioContainer
export const PortfolioContainer = styled.div`
  align-items: center;
  background: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Element: Row
export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

// Element: RowItem
export const RowItem = styled.span`
  background-color: rgba(255, 117, 112, 0.3);
  border-radius: 8px;
  padding: 1rem 2rem;
  margin: 1rem;
`;

// Element: Description
export const Description = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & p {
    margin: 1rem 0;
  }
`;
