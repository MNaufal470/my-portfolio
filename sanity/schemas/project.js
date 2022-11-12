export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "name", title: "Application Name", type: "string" },
    { name: "application", title: "Base Application", type: "string" },
    { name: "description", title: "Description", type: "string" },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
