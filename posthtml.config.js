const headElements = {
  meta: [
    {
      charset: "utf-8",
    },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "description",
      content:
        "A front-end template that helps you build fast, modern mobile web apps.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap",
    },
  ],
  title: "Web Starter Kit",
};

const root = "src";

module.exports = {
  plugins: [
    require("posthtml-extend")({ root }),
    require("posthtml-include")({ root }),
    require("posthtml-expressions")({ root }),
    require("posthtml-head-elements")({ headElements }),
  ],
};
