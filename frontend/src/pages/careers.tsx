import React, { useState } from "react";
import applyImg from "../../static/image.png";
import "../components/careers.css";
import { color } from "@mui/system";
import DrawerAppBar from "../components/header";
import Layout from "../components/layout";
import { Toolbar } from "@mui/material";
import FooterDetails from "../components/FooterDetails";
import JobCard from "../components/careers/jobCard";
import { graphql } from "gatsby";
import Modalpopup from "../components/modal/Modalpopup";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "../components/modal/Modalpopup";
import Jobdeatils from "../components/jobDeatils/Jobdeatils";

const Careers = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data, "dasdfasdfasdfata");
  const { allStrapiJob } = data;
  return (
    <Layout>
      <div className="div1">
        <div className="container">
          <div className="herobanner">
            <div className="per60">
              <h1>
                Get The Right <br />
                Job You Deserve
              </h1>
              <div className="arrow-line"></div>
              <p>
                Dear Innovations and actions Demonstrate our ideology.
                <br />
                We believe in being creative and putting our values into <br />
                practise that builds a long-term customer and employer
                realtionship.
              </p>
            </div>
            <div className="per40">
              <div className="imgWrapper">
                <img src={applyImg} className="img2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div2">
        <div className="container">
          <h2>
            
            Our Work Culture Makes Us <br />
            <span className="span1">Irresistible !</span>
          </h2>
          <br />
          <div className="outer-box">
            <p className="p1">5 Days a Week</p>
            <p className="p2">Employee First</p>
            <p className="p3">Rewards & Bemefits</p>
            <p className="p4">Medical Insurance</p>
            <p className="p5">Learning Sessions</p>
            <p className="p6">Leaves Encashment</p>
            <p className="p7">Positive Environment</p>
            <p className="p8">Groundbreaking Projects</p>
            <p className="p9">Referral Program</p>
          </div>
        </div>
      </div>

      <div className="div3">
        <h1>
          Become a part of our big family to inspire and get inspired by <br />
          <span style={{ color: "#3A7EF8" }}>professional experts.</span>
          <br />
        </h1>
      </div>

      {allStrapiJob.nodes.map((item, index) => (
        <JobCard bg={index % 2 === 0 ? "#F0F5FF" : "white"} 
        {...item}  setOpen={setOpen} open={open} /> 
        
        ))
      }

      {/* <JobCard bg={"white"}  setOpen={setOpen}/>
      <JobCard bg={"#F0F5FF"}  setOpen={setOpen}/>
      <JobCard bg={"white"}  setOpen={setOpen}/>
    
      
      {/* <Jobdeatils></Jobdeatils> */}
      <Modalpopup open={open} setOpen={setOpen}></Modalpopup>

      <FooterDetails></FooterDetails>
    </Layout>
  );
};
export const query = graphql`
  query Careers {
    allStrapiJob {
      nodes {
        workType
        id
        vacancy
        jobType
        jobRole
        Location
      }
    }
  }
`;
export default Careers;
