const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")
  const jd = path.resolve("./src/templates/jd.js")
  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
        allStrapiJob {
          nodes {
            id
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }
  const articles = result.data.allStrapiArticle.nodes
  const jobs = result.data.allStrapiJob.nodes
  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/service/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }
  if (jobs.length > 0) {
    jobs.forEach((JD) => {
      createPage({
        path: `/job/${JD.id}`,
        component: jd,
        context: {
          slug: JD.id,
        },
      })
    })
  }
}




