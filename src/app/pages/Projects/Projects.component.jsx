// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../client";

// Import: Elements
import {
  Article,
  Container,
  Grid,
  Heading,
  PostHeading,
  PostLead,
  SubHeading,
  Wrapper,
  Post,
  Image,
  PortfolioContainer,
  Row,
  RowItem,
  Description,
} from "./Projects.elements";

// Page: Projects
export default function Projects() {
  // State: projectData
  const [projectData, setProjectData] = useState([]);

  // Effect: Fetches projectData from Sanity.io
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          slug,
          date,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          client,
          description,
          projectType,
          link,
          tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Projects</Heading>
          <SubHeading>Welcome to my Projects</SubHeading>

          <Grid>
            {projectData &&
              projectData.map((project, index) => (
                <Article key={project.slug.current}>
                  <Link to={"/blog/" + project.slug.current}>
                    <Post key={index}>
                      <Image
                        src={project.mainImage.asset.url}
                        alt={project.mainImage.alt}
                      />
                      <PostLead>
                        <PostHeading>{project.title}</PostHeading>
                      </PostLead>
                    </Post>
                  </Link>

                  <PortfolioContainer>
                    <Row>
                      <RowItem>
                        <strong>Finished on</strong>:{" "}
                        {new Date(project.date).toLocaleDateString()}
                      </RowItem>

                      <RowItem>
                        <strong>Client</strong>: 
                        {project.client}
                      </RowItem>

                      <RowItem style={{ textTransform: "capitalize" }}>
                        <strong>Type</strong>: 
                        {project.projectType}
                      </RowItem>
                    </Row>

                    <Description>
                      <p>{project.description}</p>

                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        View the Project{" "}
                        <span role="img" aria-label="right pointer">
                          👉                       
                        </span>
                      </a>
                    </Description>
                  </PortfolioContainer>
                </Article>
              ))}
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
