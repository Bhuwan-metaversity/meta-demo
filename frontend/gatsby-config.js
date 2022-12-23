require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "metaversity-website",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
            // queryParams: {
            //   publicationState:
            //     process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            //   populate: {
            //     cover: "*",
            //     blocks: {
            //       populate: "*",
            //     },
            //   },
            // },
          },
          {
            singularName: "author",
          },
          {
            singularName: "industry",
          },
          {
            singularName: "category",
          },
          {
            singularName: "hero-banner",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "background",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oxygen\:300,400,700`, "Space Grotesk"],
        display: "swap",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};
