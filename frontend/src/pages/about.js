import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  // const { strapiAbout } = useStaticQuery(graphql`
  //   query {
  //     strapiAbout {
  //       title
  //       blocks {
  //         ...Blocks
  //       }
  //     }
  //   }
  // `)
  // const { title, blocks } = strapiAbout

  // const seo = {
  //   metaTitle: title,
  //   metaDescription: title,
  // }

  return (
    <Layout> 
      
      {/* <Seo seo={seo} />
      <Headings title={strapiAbout.title} />
      <BlocksRenderer blocks={blocks} /> */}
    </Layout>
  )
}

export default AboutPage
