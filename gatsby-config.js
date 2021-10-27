module.exports = {
  siteMetadata: {
    title: "Matt Cook Dot Art",
    description: "Digital visual art.",
    author: "Matt Cook <matt@sciencefidelity.co.uk>",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/mwa-icon.png",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
}
