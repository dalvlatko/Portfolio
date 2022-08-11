import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

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
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
    console.log("sanity data fetched");
  }, []);

  let numThumbnails = 2;

  return (
    <main className="p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">Latest Blogs</h1>
        <h2 className="text-lg flex justify-center mb-12">
          My thoughts on everything
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {postData &&
            postData.slice(0, numThumbnails).map((post, index) => (
              <article key={index}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug border-l-8 border-blue-600"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-over absolute"
                    />
                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-lg font-bold px-3 py-4 bg-opacity-75 text-white drop-shadow-lg">
                        {post.title === undefined
                          ? post.publishedAt + " Blog"
                          : post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
