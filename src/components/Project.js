import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { Icon } from "@iconify/react";
import BackgroundText from "./BackgroundText.js";

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
        cyrillic
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) return "Loading...";

  return (
    <main id="Projects" className="overflow-hidden">
      {projectData &&
        projectData.map((project, index) => (
          <article
            className={`relative flex flex-wrap justify-center px-5 lg:px-10 xl:px-20 py-10 gap-8 ${
              index % 2 === 0
                ? "bg-gunmetal"
                : "sm:flex-row-reverse bg-turquoise"
            }`}
            key={index}
          >
            <div className="min-w-[360px] lg:w-2/6">
              <h1 className="inline pr-2 text-5xl text-crayola font-sans font-semibold">
                <a
                  href={project.live_site || project.github}
                  alt={project.title}
                >
                  {project.title}
                </a>
              </h1>
              <div className="inline text-mintcream">
                {new Date(project.date).getUTCFullYear()}
              </div>
              <div className="prose my-2 text-mintcream">
                <BlockContent
                  blocks={project.description}
                  projectId="1i41jkhj"
                  dataset="production"
                />
              </div>
              <div className="mt-8 space-x-4">
                {project.live_site && (
                  <a
                    href={project.live_site}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`${
                      index % 2 === 0
                        ? "text-turquoise border-turquoise hover:bg-turquoise"
                        : "text-gunmetal border-gunmetal hover:bg-gunmetal"
                    } rounded-lg border-2  border-solid hover:text-mintcream w-40 text-center font-semibold p-2`}
                  >
                    <span>Live Site</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`${
                      index % 2 === 0
                        ? "text-turquoise border-turquoise hover:bg-turquoise"
                        : "text-gunmetal border-gunmetal hover:bg-gunmetal"
                    } rounded-lg border-2  border-solid hover:text-mintcream w-40 text-center font-semibold p-2`}
                  >
                    <span>GitHub</span>
                  </a>
                )}
                {project.blog_post && (
                  <a
                    href={project.blog_post}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`${
                      index % 2 === 0
                        ? "text-turquoise border-turquoise hover:bg-turquoise"
                        : "text-gunmetal border-gunmetal hover:bg-gunmetal"
                    } rounded-lg border-2  border-solid hover:text-mintcream w-40 text-center font-semibold p-2`}
                  >
                    <span>Case Study</span>
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-10 w-96">
              {project.screenshot && (
                <img
                  src={project.screenshot.asset.url}
                  alt={`Screenshot of ${project.title} project | ${
                    project.live_site || project.github
                  }`}
                  className={`border-solid border-turquoise border-b-[20px] ${
                    index % 2 === 0
                      ? "border-l-[20px]"
                      : "border-r-[20px] border-gunmetal"
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
                        className="text-3xl text-mintcream"
                      />
                      <div className="text-mintcream m-2">{tag}</div>
                    </div>
                  ))}
              </div>
            </div>
            <BackgroundText
              text={project.cyrillic || "НОВ ПРОЕКТ "}
              reps={1000}
              bgTextColor={
                index % 2 === 0 ? "text-gunmetal-light" : "text-turquoise-light"
              }
              position={"top-0"}
            />
          </article>
        ))}
    </main>
  );
}
