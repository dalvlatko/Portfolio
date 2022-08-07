/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "description",
      type: "blockContent",
    },
    {
      name: "live_site",
      type: "url",
    },
    {
      name: "github",
      type: "url",
    },
    {
      name: "blog_post",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
