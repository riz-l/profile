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
  Image,
  Post,
  PostHeading,
  PostLead,
  SubHeading,
  Wrapper,
} from "./Blog.elements";

// Page: Blog
export default function Blog() {
  // State: isLoading, postData
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState([]);

  // Effect: Fetches postData from Sanity.io
  useEffect(() => {
    function getSanityData() {
      setIsLoading(true);

      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`
        )
        .then((data) => (setPostData(data), setIsLoading(false)))
        .catch(console.error);
    }

    getSanityData();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Blog</Heading>
          <SubHeading>Welcome to my Blog</SubHeading>

          <Grid>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              postData &&
              postData.map((post, index) => (
                <Article key={post.slug.current}>
                  <Link to={"/blog/" + post.slug.current}>
                    <Post key={index}>
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                      />
                      <PostLead>
                        <PostHeading>{post.title}</PostHeading>
                      </PostLead>
                    </Post>
                  </Link>
                </Article>
              ))
            )}
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
