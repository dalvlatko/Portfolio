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
              className="flex flex-wrap justify-center px-5 lg:px-10 xl:px-20 py-10 gap-8 bg-blue-300"
              key={index}
            >
              <div className="w-96 lg:w-2/6">
                <h1 className="text-5xl text-blue-500 title">
                  <a href={project.live_site} alt={project.title}>
                    {project.title}
                  </a>
                </h1>
                <div className="my-2">
                  <strong className="font-bold">Finished on</strong>:{" "}
                  {new Date(project.date).toLocaleDateString()}
                </div>
                <div className="prose my-2">
                  <BlockContent
                    blocks={project.description}
                    projectId="1i41jkhj"
                    dataset="production"
                  />
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
                      <span>Github</span>
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
                <div className="flex flex-wrap">
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <div
                        className="flex flex-col items-center py-2 mr-2"
                        key={index}
                      >
                        <Icon
                          icon={`simple-icons:${tag.toLowerCase()}`}
                          className="text-3xl"
                        />
                        <div className="m-2">{tag}</div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-96">
                <img
                  src={project.screenshot.asset.url}
                  alt="Vladimir Icovski eating French Fries"
                  className="border-b-8 border-l-8 border-solid border-red-400"
                />
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}
