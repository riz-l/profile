// Import: Packages
import styled from "styled-components/macro";

// Animation: headingGradient
// const headingGradient = keyframes`
//   0% { background-position: 0 50% }
//   50% { background-position: 100% 50% }
//   100% { background-position: 0 50% }
// `;

// Element: Container
export const Container = styled.main`
  height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: 78%;
`;

// Element: Heading
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 8rem;
  font-weight: 600;
  margin-top: -100px;
`;

// Element: CtaText
export const CtaText = styled.span`
  color: #ffffff;
  font-size: 2rem;
  transition: all 100ms linear;
`;

// Element: Cta
export const Cta = styled.div`
  background-color: transparent;
  border: 2px solid #ffffff;
  cursor: pointer;
  margin-top: 1rem;
  padding: 1.4rem 2.4rem;
  transition: all 100ms linear;

  &:hover {
    background-color: #ffffff;
    border-radius: 80px;
    box-shadow: 0 11px 8px -9px rgba(0, 0, 0, 0.35);
    transition: background-color 100ms linear, border 100ms linear,
      box-shadow 100ms linear, border-radius 300ms linear;

    & ${CtaText} {
      color: #ff7570;
      transition: all 100ms linear;
    }
  }
`;

/* https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80 */
/* https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80 */
/* https://images.unsplash.com/photo-1512551980832-13df02babc9e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=80 */
/* https://images.unsplash.com/photo-1563089145-599997674d42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 */

/* background: linear-gradient(
      to top right,
      rgba(25, 24, 31, 0.9),
      rgba(0, 137, 233, 0.2)
    ),
    url(https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
