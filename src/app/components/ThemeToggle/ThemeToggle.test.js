// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import ThemeToggle from "./ThemeToggle.component";

// Test: Checks that ThemeToggle renders
it("checkThemeToggleRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeToggle />
    </Router>
  );
  const component = queryByTestId("themeToggle");
  expect(component).toBeTruthy();
});
