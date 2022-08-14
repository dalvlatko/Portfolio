import React, { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BackgroundText from "./BackgroundText";

export default function Archive() {
  const [postData, setPost] = useState(null);
  const { slug } = useParams();

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

  if (!Archive) return "Loading...";

  return (
    <main
      id="Blog"
      className="relative flex flex-col items-center justify-center bg-bittersweet overflow-hidden"
    >
      {postData &&
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month, monthIndex) => (
          <section
            className={`relative flex flex-col w-full max-w-[900px] px-5 sm:px-12 lg:px-10 xl:px-20 py-10 gap-5 ${
              monthIndex % 2 === 0 ? "bg-gunmetal" : "bg-turquoise"
            }`}
            key={month}
          >
            <h1 className="text-mintcream text-2xl text-center">{month}</h1>
            {postData
              .filter(
                (e) => new Date(e.publishedAt).getUTCMonth() == monthIndex
              )
              .map((post, index) => (
                <article className="flex flex-wrap" key={index}>
                  <h1 className="text-2xl text-crayola font-sans font-semibold">
                    {post.title}
                  </h1>
                  <div className="text-mintcream ml-auto">
                    {new Date(post.publishedAt).toLocaleString("default", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </article>
              ))}
          </section>
        ))}

      <BackgroundText
        text={"ЗДРАВО ВЛАТКО "}
        reps={1000}
        bgTextColor={"text-bittersweet-light"}
        position={"top-2 sm:text-5xl"}
      />
    </main>
  );
}
