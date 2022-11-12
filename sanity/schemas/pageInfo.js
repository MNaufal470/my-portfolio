export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "surName", title: "Sur Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "age", title: "Age", type: "string" },
    {
      name: "backgroundInformation",
      title: "Background Information",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "profilePic",
      title: "profilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { name: "email", title: "Email", type: "string" },
    { name: "phoneNumber", title: "phoneNumber", type: "string" },
    { name: "address", title: "Address", type: "string" },
    {
      name: "social",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
