module.exports = {
  siteMetadata: {
    siteUrl: "https://www.zirop.xyz",
    title: "zirop",
    description: "Web de agencia de desarrollo de web."
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    }
  ],
};
