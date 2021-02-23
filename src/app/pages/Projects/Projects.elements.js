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
`;

// Element: Row
export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 1290px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 948px) {
    display: none;
    visibility: hidden;
  }
`;

// Element: RowItem
export const RowItem = styled.span`
  background-color: #2a2a2e;
  border-radius: 8px;
  color: #ffffff;
  margin: 0 1rem 1rem 0;
  padding: 0.8rem 1.6rem;
`;

// Element: Project
export const Project = styled.article`
  align-items: center;
  background: transparent;
  display: flex;
  height: 315px;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1290px) {
    flex-direction: column;
    height: 500px;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 948px) {
    height: 450px;
  }
`;

// Element: ImageContainer
export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1290px) {
    height: 250px;
  }
`;

// Element: Image
export const Image = styled.img`
  border-bottom-left-radius: 8px;
  border-left: 8px solid #2ec4b6;
  border-top-left-radius: 8px;
  height: 100%;
  max-width: 100%;
  min-width: 100%;
  object-fit: cover;

  @media screen and (max-width: 1290px) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

// Element: InformationContainer
export const InformationContainer = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  width: 100%;

  @media screen and (max-width: 1290px) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: 8px solid #2ec4b6;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

// Element: ProjectLead
export const ProjectLead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: Blink
export const Blink = styled.span`
  animation: ${blinkOpacity} 1s linear infinite;
  opacity: 0;
  transition: all 100ms linear;
  visibility: hidden;
`;

// Element: ProjectHeading
export const ProjectHeading = styled.h3`
  color: #2a2a2e;
  cursor: pointer;
  font-size: 2.8rem;
  transition: all 100ms linear;

  &:hover {
    color: #ff7570;
    transition: all 100ms linear;

    & ${Blink} {
      opacity: 1;
      transition: all 100ms linear;
      visibility: visible;
    }
  }
`;

// Element: Description
export const Description = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  & p {
    color: #2a2a2e;
    font-size: 1.2rem;
  }
`;
