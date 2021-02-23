// Import: Packages
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

// Import: Themes
import lightTheme from "./app/themes/lightTheme";
import darkTheme from "./app/themes/darkTheme";

// Import: Components, Pages
import { Navigation } from "./app/components";
import {
  About,
  Blog,
  Contact,
  Home,
  Projects,
  SingleBlog,
  SingleProject,
} from "./app/pages";

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
          <Route component={SingleProject} path="/projects/:slug" />
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
      rgba(170, 75, 107, 1),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(107, 107, 131, 1), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(59, 141, 153, 1), rgba(0, 0, 255, 0) 70.71%),
    url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
