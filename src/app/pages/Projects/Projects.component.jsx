// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../client";

// Import: Elements
import {
  Blink,
  Container,
  Grid,
  Description,
  Heading,
  Image,
  ImageContainer,
  InformationContainer,
  Project,
  ProjectHeading,
  ProjectLead,
  Row,
  RowItem,
  SubHeading,
  Wrapper,
} from "./Projects.elements";

// Page: Projects
export default function Projects() {
  // State: isLoading, projectData
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);

  // Effect: Fetches projectData from Sanity.io
  useEffect(() => {
    async function getSanityData() {
      setIsLoading(true);
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
        // .then((data) => setProjectData(data))
        .then((data) => {
          setProjectData(data);
          setIsLoading(false);
        })
        // .catch(console.error);
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          throw new Error(error);
        });
    }

    getSanityData();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Projects</Heading>
          <SubHeading>Welcome to my Projects</SubHeading>

          <Grid>
            {isLoading ? (
              <>
                <h2>Loading...</h2>
              </>
            ) : (
              projectData &&
              projectData.map((project, index) => (
                <React.Fragment key={project.slug.current}>
                  <Project key={index}>
                    <ImageContainer>
                      <Image
                        src={project.mainImage.asset.url}
                        alt={project.mainImage.alt}
                      />
                    </ImageContainer>

                    <InformationContainer>
                      <ProjectLead>
                        <Link to={"/projects/" + project.slug.current}>
                          <ProjectHeading>
                            {project.title}
                            <Blink>_</Blink>
                          </ProjectHeading>
                        </Link>
                      </ProjectLead>

                      <Description>
                        <p>{project.description}</p>
                      </Description>

                      <Row>
                        <RowItem>
                          <strong>Finished on:</strong>{" "}
                          {new Date(project.date).toLocaleDateString()}
                        </RowItem>

                        <RowItem>
                          <strong>Client:</strong> {project.client}
                        </RowItem>

                        <RowItem style={{ textTransform: "capitalize" }}>
                          <strong>Type:</strong> {project.projectType}
                        </RowItem>
                      </Row>
                    </InformationContainer>
                  </Project>
                </React.Fragment>
              ))
            )}
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
