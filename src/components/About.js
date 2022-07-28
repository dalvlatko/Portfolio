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
        image,
        bio
      }`
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);
  }, []);

  if (!aboutData) return <Loading />;

  return (
    <section className="pt-12 pb-12 px-8">
      <h1 className="flex justify-center text-5xl text-black font-bold leading-none lg:leading-snug home-name">
        About Me
      </h1>
      <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
        <BlockContent
          blocks={aboutData.bio}
          projectId="1i41jkhj"
          dataset="production"
        />
      </div>
    </section>
  );
}
