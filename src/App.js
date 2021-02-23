// Import: Packages
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

// Import: Themes
import lightTheme from "./app/themes/lightTheme";
import darkTheme from "./app/themes/darkTheme";

// Import: Components, Pages
import { Navigation } from "./app/components";
import { About, Blog, Contact, Home, Projects, SingleBlog } from "./app/pages";

// Component: App
export default function App() {
  // State: isDarkTheme, isNavigationOpen
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  // Effect: Sets user preference for light/dark theme
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  // If returning user expressed preference for dark theme previously,
  // ...theme === darkTheme
  // ...otherwise, theme === lightTheme
  function getInitialTheme() {
    const isReturningUser = "dark" in localStorage;
    const savedTheme = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorTheme();

    // If theme was saved, set theme to lightTheme/darkTheme
    if (isReturningUser) {
      return savedTheme;
    }
    // If preferred color theme is dark, sets theme to dark
    else if (userPrefersDark) {
      return true;
    }
    // Else sets theme to light
    else {
      return false;
    }
  }

  // Looks for user's preferred color scheme
  function getPrefColorTheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Navigation
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          isNavigationOpen={isNavigationOpen}
          setIsNavigationOpen={setIsNavigationOpen}
        />

        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
          <Route component={SingleBlog} path="/blog/:slug" />
          <Route component={Blog} path="/blog" />
          <Route component={Projects} path="/projects" />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

// Element: Container
const Container = styled.div`
  background-color: #19181f;
  background: linear-gradient(
      217deg,
      rgba(170, 75, 107, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(107, 107, 131, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(59, 141, 153, 0.8), rgba(0, 0, 255, 0) 70.71%),
    url(https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  /* background: linear-gradient(
      to top right,
      rgba(25, 24, 31, 0.9),
      rgba(0, 137, 233, 0.2)
    ),
    url(https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* filter: blur(80px); */
  /* height: 100vh;
  min-height: 100vh;
  position: fixed;
  overflow-y: auto;
  width: 100%; */
`;

// https://images.unsplash.com/photo-1590028974453-72ee91a8a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
// https://images.unsplash.com/photo-1524439654840-b12734d89414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
// https://images.unsplash.com/photo-1514561582573-b6e2c3cfaf76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80
