import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import BackgroundText from "./BackgroundText";

export default function Months() {
  const [postData, setPost] = useState(null);
  const [hidden, setHidden] = useState(null);

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

  if (!Months) return "Loading...";

  return (
    <main
      id="Blog"
      className="relative flex flex-col items-center justify-center bg-bittersweet overflow-hidden"
    >
      <button
        className={
          "text-gunmetal border-gunmetal hover:bg-gunmetal rounded-lg border-2  border-solid hover:text-mintcream w-40 text-2xl font-semibold p-2"
        }
        onClick={() => (hidden ? setHidden(null) : setHidden("hidden"))}
      >
        2022
      </button>
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
            className={`relative flex ${hidden} flex-col w-full max-w-[900px] px-5 sm:px-12 lg:px-10 xl:px-20 py-3 gap-5 bg-gunmetal`}
            key={month}
          >
            <div className="inline text-mintcream text-2xl ">{month}</div>
            {postData
              .filter(
                (e) => new Date(e.publishedAt).getUTCMonth() == monthIndex
              )
              .map((post, index) => (
                <article className="flex flex-wrap items-center" key={index}>
                  <Link
                    onClick={window.scrollTo(0, 0)}
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <h1 className="text-2xl text-crayola font-sans font-semibold">
                      {post.title}
                    </h1>
                  </Link>
                  <div className="text-mintcream w-full sm:w-auto sm:ml-auto">
                    {new Date(post.publishedAt).toLocaleString("default", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </article>
              ))}
            <BackgroundText
              text={"ЗДРАВО ВЛАТКО "}
              reps={1000}
              bgTextColor={"text-gunmetal-light"}
              position={"top-2 sm:text-5xl"}
            />
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
