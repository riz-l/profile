// Import: Packages
import React from "react";

// Import: Assets
import cvPdf from "../../../assets/pdfs/cv-2021-jlayton.pdf";

// Import: Elements
import { Container, Cta, CtaText, Heading, Wrapper } from "./Home.elements";

// Page: Home
export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Hello there. I'm Riz.</Heading>

          <Cta>
            <a href={cvPdf} target="blank">
              <CtaText>Download CV</CtaText>
            </a>
          </Cta>
        </Wrapper>
      </Container>
    </>
  );
}
