// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import Footer from "./Footer.component";

// Test: Checks that Footer renders
it("checkFooterRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Footer />
    </Router>
  );
  const component = queryByTestId("footer");
  expect(component).toBeTruthy();
});
