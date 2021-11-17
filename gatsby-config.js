module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby-Template",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "recipedata",
        fieldName: "recipedata",
        url:
          "https://api-us-east-1.graphcms.com/v2/ckw2equen5pry01xwekkl08wc/master"
      }
    }
  ], 
};
