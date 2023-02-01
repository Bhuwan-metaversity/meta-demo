import React, { useState } from "react";
import "../components/careers.css";
import { color } from "@mui/system";
import DrawerAppBar from "../components/header";
import Layout from "../components/layout";
import { Toolbar } from "@mui/material";
import FooterDetails from "../components/FooterDetails";
import JobCard from "../components/careers/jobCard";
import { graphql } from "gatsby";
import Modalpopup from "../components/modal/Modalpopup";
import Jobdeatils from "../components/jobDeatils/Jobdeatils";


const JD = ({ data }) => {
  console.log(data,"template")
  return (
    <Layout>

     <Jobdeatils data={data.strapiJob} ></Jobdeatils>

     </Layout>
  );
};
export const query = graphql`
  query ($slug: String) {
    strapiJob(id: {eq: $slug}) {
      Location
      createdAt
      jobRole
      JD {
        data {
          JD
          id
        }
      }
      Description {
        data {
          Description
          id
        }
      }
      skills {
        data {
          skills
          id
        }
      }
      jobType
      salary
      strapi_id
      vacancy
      workType
      experience
      id
    }
  }
`;
export default JD;






