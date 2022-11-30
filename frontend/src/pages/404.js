import { Box } from "@mui/material"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Box height={"80vh"} textAlign="center">
      <h1>404: Not Found</h1>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Box>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
