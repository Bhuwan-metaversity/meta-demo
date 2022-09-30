import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopServices from "../components/TopServices"
import Vertical2by2Slider from "../components/vertical2by2AutoSlider"
import Industies from "../components/Industies"

const IndexPage = () => {
  // const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       nodes {
  //         ...ArticleCard
  //       }
  //     }
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      {/* <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main> */}
      <main>
        <Vertical2by2Slider
          timeOut={5000}
          itemsPerPage={1}
          items={[
            <div
              style={{ height: 200, width: "100vh", background: "green" }}
            ></div>,
            <div
              style={{ height: "100%", width: "100vh", background: "red" }}
            ></div>,
            <div
              style={{ height: "100%", width: 200, background: "black" }}
            ></div>,
            <div
              style={{ height: "100%", width: 200, background: "blue" }}
            ></div>,
            <div
              style={{ height: "100%", width: 200, background: "purple" }}
            ></div>,
          ]}
        />
        <TopServices />
        <Industies />
      </main>
    </Layout>
  )
}

export default IndexPage
