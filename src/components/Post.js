import React, { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BackgroundText from "./BackgroundText";

export default function Post() {
  const [postData, setPost] = useState(null);
  const { slug } = useParams();
  const [numBlogs, setNumBlogs] = useState(3);

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
        }[0..${numBlogs}]`
      )
      .then((data) => setPost(data))
      .catch(console.error);
    console.log("sanity data fetched");
  }, [numBlogs]);

  if (!Post) return "Loading...";

  return (
    <main
      id="Blog"
      className="relative flex flex-col items-center justify-center bg-bittersweet overflow-hidden"
    >
      {postData &&
        postData.map((post, index) => (
          <article
            className={`relative flex flex-col items-center w-full max-w-[900px] px-5 sm:px-12 lg:px-10 xl:px-20 py-10 gap-5 ${
              index % 2 === 0 ? "bg-gunmetal" : "bg-turquoise"
            }`}
            key={index}
          >
            <h1 className="text-5xl w-full text-crayola font-sans font-semibold">
              {post.title}
            </h1>
            <div className="w-full text-mintcream py-2">
              {new Date(post.publishedAt).toLocaleString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className={`border-solid border-y-[6px] ${
                  index % 2 === 0 ? "border-turquoise" : "border-gunmetal"
                }`}
              />
            )}

            <div className="prose-xl w-full text-lg my-2 text-mintcream">
              <BlockContent
                blocks={post.body}
                postId="1i41jkhj"
                dataset="production"
              />
            </div>
            <BackgroundText
              text={post.cyrillic || "НОВ ПOCТ "}
              reps={10}
              bgTextColor={
                index % 2 === 0 ? "text-gunmetal-light" : "text-turquoise-light"
              }
              position={"top-0"}
            />
          </article>
        ))}
      {numBlogs && (
        <div className="bg-bittersweet w-full flex flex-col items-center p-2 gap-y-2">
          <button
            className={
              "text-gunmetal border-gunmetal hover:bg-gunmetal rounded-lg border-2  border-solid hover:text-mintcream w-40 text-center font-semibold p-2"
            }
            onClick={() => setNumBlogs((prevNum) => prevNum + 1)}
          >
            Load +10 Blogs
          </button>
          <button
            className={
              "text-gunmetal border-gunmetal hover:bg-gunmetal rounded-lg border-2  border-solid hover:text-mintcream w-40 text-center font-semibold p-2"
            }
          >
            Archive
          </button>
        </div>
      )}
      <BackgroundText
        text={"ЗДРАВО ВЛАТКО "}
        reps={1000}
        bgTextColor={"text-bittersweet-light"}
        position={"top-2 sm:text-5xl"}
      />
    </main>
  );
}
