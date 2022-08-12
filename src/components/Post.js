import React, { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BackgroundText from "./BackgroundText";

export default function Post() {
  const [postData, setPost] = useState(null);
  const { slug } = useParams();
  const fetchParam = () =>
    slug
      ? `[slug.current == "${slug}"]`
      : `[_type == "post"] | order(publishedAt desc)`;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          body
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
    console.log("sanity data fetched");
  }, []);

  return (
    <section
      id="Blog"
      className="relative flex flex-col items-center justify-center bg-bittersweet overflow-hidden"
    >
      {postData &&
        postData.map((post, index) => (
          <article
            className={`relative flex flex-col items-center w-full max-w-[900px] px-5 lg:px-10 xl:px-20 py-10 ${
              index % 2 === 0 ? "bg-gunmetal" : "bg-turquoise"
            }`}
            key={index}
          >
            <h1 className="text-5xl text-crayola font-sans font-semibold">
              {post.title}
            </h1>
            <div className="inline text-mintcream py-2">
              {new Date(post.publishedAt).toLocaleString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="prose my-2 text-mintcream">
              <BlockContent
                blocks={post.body}
                postId="1i41jkhj"
                dataset="production"
              />
            </div>
            <BackgroundText
              text={post.cyrillic || "НОВ ПРОЕКТ "}
              reps={10}
              bgTextColor={
                index % 2 === 0 ? "text-gunmetal-light" : "text-turquoise-light"
              }
              position={"top-0"}
            />
          </article>
        ))}
      <BackgroundText
        text={"ЗДРАВО ВЛАТКО "}
        reps={1000}
        bgTextColor={"text-bittersweet-light"}
        position={"top-2 sm:text-5xl"}
      />
    </section>
  );
}
