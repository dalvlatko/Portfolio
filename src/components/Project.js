import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="project"]{
        title,
        date,
        description,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main>
      <section>
        <h1 className="text-5xl flex justify-center">Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Created by Vladimir Icovski
        </h2>
        <section>
          {projectData &&
            projectData.map((project, index) => (
              <article
                className="relative rounded-lg shadow-xl p-16 m-10"
                key={index}
              >
                <h3 className="inline-block text-gray-800 text-3xl font-bold mb-2 hover:text-red-400">
                  <a href={project.link} alt={project.title}>
                    {project.title}
                  </a>
                </h3>
                {project.tags &&
                  project.tags.map((tag) => (
                    <span className="text-xs rounded-full py-3 px-6 bg-blue-500 m-1">
                      {tag}
                    </span>
                  ))}
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400"
                  >
                    <span>Live Site</span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
