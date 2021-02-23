// Import: Packages
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

// Import: Elements
import { Container, Heading, Wrapper } from "./SingleBlog.elements";

// Extracts imageUrl from sanity post data source
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// Page: SingleBlog
export default function SingleBlog() {
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
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "authorName": author->name,
          "authorImage": author->image
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
          <Heading>{singlePost.title}_</Heading>

          <BlockContent
            blocks={singlePost.body}
            projectId="aof33fhu"
            dataset="production"
          />
        </Wrapper>
      </Container>
    </>
  );
}
