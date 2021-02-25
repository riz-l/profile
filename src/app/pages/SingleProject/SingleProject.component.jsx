// Import: Packages
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

// Import: Icons
import { IoIosArrowBack as BackIcon } from "react-icons/io";

// Import: Elements
import {
  Blink,
  Container,
  Content,
  Header,
  HeaderImage,
  Heading,
  Prose,
  ReturnButton,
  Wrapper,
} from "./SingleProject.elements";

// Extracts imageUrl from sanity post data source
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// Page: SingleProject
export default function SingleProject() {
  // State: singlePost
  const [singlePost, setSinglePost] = useState([]);

  // Params: slug
  const { slug } = useParams();

  // Effect: Fetches post data === slug.current from Sanity.io
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            client,
            projectType,
            link,
            tags,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
          }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  // If there is no singlePost, return loading message
  if (!singlePost) {
    return (
      <>
        <div>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            <ReturnButton>
              <Link to="/projects">
                <span>
                  <BackIcon />
                  Back<Blink>_</Blink>
                </span>
              </Link>
            </ReturnButton>

            <Header>
              <Heading>{singlePost.title}</Heading>
              <HeaderImage src={urlFor(singlePost.mainImage).url()} alt="" />
            </Header>

            <Prose>
              <BlockContent
                blocks={singlePost.body}
                projectId="aof33fhu"
                dataset="production"
              />
            </Prose>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
}
