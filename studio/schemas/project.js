export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "client", title: "Client" },
          { value: "other", title: "Other" },
          { value: "personal", title: "Personal" },
        ],
      },
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
