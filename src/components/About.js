import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import Loading from "./Loading.js";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="author"]{
        name,
        image{
          asset->{
            _id,
            url
          },
        },
        bio
      }`
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);
  }, []);

  if (!aboutData) return <Loading />;

  return (
    <section className="flex flex-wrap justify-center lg:p-20 md:p-10 p-5 gap-8 bg-yellow-300">
      <div className="max-w-md">
        <h1 className="text-5xl text-blue-500 title">About Me</h1>
        <div className="prose lg:prose-xl">
          <BlockContent
            blocks={aboutData.bio}
            projectId="1i41jkhj"
            dataset="production"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-md">
        <img
          src={aboutData.image.asset.url}
          alt="Vladimir Icovski eating French Fries"
          className="rounded-full w-3/4"
        />
        <div className="max-w-l flex flex-col items-center gap-5 p-10">
          <h2 className="rounded-lg border-2 border-blue-500 border-dotted w-40 text-center text-blue-500 p-2">
            View Blog
          </h2>
          <h2 className="rounded-lg border-2 border-blue-500 border-dotted w-40 text-center text-blue-500 p-2">
            Contact
          </h2>
        </div>
      </div>
    </section>
  );
}
