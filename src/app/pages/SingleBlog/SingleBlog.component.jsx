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
  Author,
  AuthorDate,
  AuthorImage,
  AuthorName,
  Blink,
  Container,
  Content,
  Header,
  HeaderImage,
  Heading,
  Prose,
  ReturnButton,
  Wrapper,
} from "./SingleBlog.elements";

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
          publishedAt,
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
          <Content>
            <ReturnButton>
              <Link to="/blog">
                <span>
                  <BackIcon />
                  Back<Blink>_</Blink>
                </span>
              </Link>
            </ReturnButton>

            <Header>
              <Heading>{singlePost.title}</Heading>
              <HeaderImage src={urlFor(singlePost.mainImage).url()} alt="" />

              <Author>
                <AuthorImage
                  src={urlFor(singlePost.authorImage).width(100).url()}
                  alt={`Author is ${singlePost.authorName}`}
                />
                <AuthorName>{singlePost.authorName}</AuthorName>
                <AuthorDate>
                  Published:{" "}
                  {new Date(singlePost.publishedAt).toLocaleDateString()}
                </AuthorDate>
              </Author>
            </Header>

            <Prose>
              <BlockContent
                blocks={singlePost.body}
                projectId="aof33fhu"
                dataset="production"
              />
            </Prose>

            {/* <div
              className="prose"
              style={{
                width: "100%",
                minWidth: "100%",
              }}
            >
              <BlockContent
                blocks={singlePost.body}
                projectId="aof33fhu"
                dataset="production"
              />
            </div> */}
          </Content>
        </Wrapper>
      </Container>
    </>
  );
}
