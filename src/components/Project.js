import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { Icon } from "@iconify/react";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="project"] | order(date asc){
        title,
        date,
        description,
        live_site,
        github,
        blog_post,
        tags,
        screenshot{
          asset->{
            _id,
            url
          },
        },
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section id="Projects">
        {projectData &&
          projectData.map((project, index) => (
            <article
              className={`flex flex-wrap justify-center px-5 lg:px-10 xl:px-20 py-10 gap-8 ${
                index % 2 === 0
                  ? "bg-gray-800"
                  : "sm:flex-row-reverse bg-blue-400"
              }`}
              key={index}
            >
              <div className="min-w-96 md:w-2/6">
                <h1 className="inline pr-2 text-5xl text-yellow-300 title">
                  <a href={project.live_site} alt={project.title}>
                    {project.title}
                  </a>
                </h1>
                <div className="inline my-2 text-white">
                  {new Date(project.date).getUTCFullYear()}
                </div>
                <div className="prose my-2 text-white">
                  <BlockContent
                    blocks={project.description}
                    projectId="1i41jkhj"
                    dataset="production"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-10 w-96">
                {project.screenshot && (
                  <img
                    src={project.screenshot.asset.url}
                    alt="Vladimir Icovski eating French Fries"
                    className={`border-solid border-red-400 border-b-8 ${
                      index % 2 === 0 ? "border-l-8" : "border-r-8"
                    }`}
                  />
                )}
                <div className="flex flex-wrap">
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <div
                        className="flex flex-col items-center my-2 mr-2"
                        key={index}
                      >
                        <Icon
                          icon={`simple-icons:${tag.toLowerCase()}`}
                          className="text-3xl text-white"
                        />
                        <div className="text-white m-2">{tag}</div>
                      </div>
                    ))}
                </div>
                <div className="my-2 space-x-4">
                  {project.live_site && (
                    <a
                      href={project.live_site}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      <span>Live Site</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.blog_post && (
                    <a
                      href={project.blog_post}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      <span>Case Study</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}
