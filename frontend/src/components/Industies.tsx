import { Box, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

function Industies() {
  const { allStrapiIndustry } = useStaticQuery(graphql`
    query {
      allStrapiIndustry {
        edges {
          node {
            id
            name
            coverSquare {
              id
              name
              url
              alternativeText
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <div>
      <Box>
        <Typography variant="h5" fontSize="40px">
          Industries
        </Typography>
        {allStrapiIndustry.edges.map(({ node: { id, name, coverSquare } }) => (
          <Box
            key={id}
            sx={{
              height: 400,
              width: 400,
              backgroundImage: `url(${
                process.env.STRAPI_API_URL + coverSquare?.url
              })`,
              backgroundClip: "border-box",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              borderRadius: "16px",
            }}
          >
            {" "}
            <Typography m={3} fontSize={"20px"} color="white">
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default Industies
