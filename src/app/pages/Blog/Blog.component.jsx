// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../client";

// Import: Elements
import {
  Article,
  Blink,
  Container,
  DateStamp,
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
  // State: isLoading, blogData
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

  // Effect: Fetches blogData from Sanity.io
  useEffect(() => {
    function getSanityData() {
      setIsLoading(true);

      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            publishedAt,
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
        .then((data) => (setBlogData(data), setIsLoading(false)))
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
              blogData &&
              blogData.map((post, index) => (
                <Article key={post.slug.current}>
                  <Link to={"/blog/" + post.slug.current}>
                    <Post key={index}>
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                      />
                      <PostLead>
                        <PostHeading>
                          {post.title}
                          <Blink>_</Blink>
                        </PostHeading>
                        <DateStamp>
                          Published:{" "}
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </DateStamp>
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
