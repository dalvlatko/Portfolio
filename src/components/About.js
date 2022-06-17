import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

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

  if (!aboutData) return <div>Loading...</div>;

  return (
    <section className="pt-12 pb-12 px-8">
        <h1 className="flex justify-center text-6xl text-black font-bold leading-none lg:leading-snug home-name">
          {aboutData.name}
        </h1>
        <h2 className="flex justify-center">
          This is the about section
        </h2>
        <p>
          {aboutData.bio}
        </p>
    </section>
  )
}
