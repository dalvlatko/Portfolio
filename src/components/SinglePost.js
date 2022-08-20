import React, { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BackgroundText from "./BackgroundText";

export default function SingePost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
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
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return null;

  return (
    <article
      className={`relative overflow-hidden flex flex-col items-center w-full max-w-[900px] px-5 sm:px-12 lg:px-10 xl:px-20 py-10 gap-5 bg-turquoise border-solid border-b-[6px] border-crayola`}
    >
      <Link
        to={"/post/" + post.slug.current}
        key={post.slug.current}
        className="w-full"
      >
        <h1 className="text-5xl text-crayola font-sans font-semibold">
          {post.title}
        </h1>
      </Link>
      <div className="w-full text-mintcream py-2">
        {new Date(post.publishedAt).toLocaleString("default", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      {post.mainImage && (
        <a href={post.mainImage.asset.url}>
          <img
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            className={"border-solid border-y-[6px] border-gunmetal"}
          />
        </a>
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
        bgTextColor={"text-turquoise-light"}
        position={"top-0"}
      />
    </article>
  );
}
