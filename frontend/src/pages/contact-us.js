import React, { useState } from "react";
import { Link } from 'gatsby';   
import img from "../images/hero-banner-bgImg.png";
import "../styles/contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import FooterDetails from "../components/FooterDetails";
import Footer from "../components/Footer";
import teamImg from "../images/teamImg.png"
import locationOfMetaversity from "../images/locationOfMetaversity.png"
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";


const contactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  //console.log(name)

  const { allStrapiArticle } = useStaticQuery(graphql`
   query {
     allStrapiArticle {
       nodes {
         ServiceName
         slug
         id
       }
     }
   }
 `);




  return (
    <>
      <Layout>
        <div className="contact-caintainer">
          <div className="header-contact-wrapper">
            <div className="contact-hero-section">
              {/* <img src={img} /> */}
              <h1>Contact Us</h1>

              <div className="contact-arrow-line"></div>
              <p>
                We Are Happy To Be Part Of Your new Beginning and excited about
                walking <br /> through the beautiful journey together!
              </p>
            </div>
          </div>

          <div className="main-contact-caintanier">

            <div className="main-contact-wrapper">
              <div className="left-form">
                <div className="left-side-top-section">
                  <h1>Contact Us</h1>
                  <div className="left-side-arrow"></div>
                </div>

                <div className="left-input-section">
                  <div className="left-input1">
                    <LocationOnIcon style={{ color: "white" }} />
                    <p>
                      Suite 607,C-51,BSI Business Park <br /> Sector 62,Noida -
                      201309
                    </p>
                  </div>

                  <div className="left-input2">
                    <MailIcon style={{ color: "white" }} />
                    <p>info@metaversitytechnologies.com</p>
                  </div>

                  <div className="left-input3">
                    <PhoneIcon style={{ color: "white" }} />
                    <p>+91-8810228283 &nbsp; +91-7011314162</p>
                  </div>
                </div>
              </div>




              <div className="right-form">
                <form onSubmit={(e) => {
                  e.preventDefault();

                  // const data = new FormData();
                  // data.append(
                  const data = JSON.stringify({
                    data: {
                      name: name,
                      email: email,
                      contact: number,
                      question: message,
                    }
                  })


                  if (!name || !email || !number || !message) {
                    alert("All Fields Are Mendatory");
                    return;
                  }


                  // data.append("Name", "ADF");
                  fetch(process.env.STRAPI_API_URL + "api/user-requests", {
                    method: "POST",
                    body: data,
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((res) => {
                      console.log(res);
                      if (res?.data) {
                        alert('Submitted Sucessfully')

                        // setOpen(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setNumber("");
                      } else {
                        res.error.details.errors.forEach((element) => {
                          alert(
                            element.path?.join(",") + ": " + element.message
                          );
                        });
                      }
                    })
                    .catch((err) => alert(err?.toString()));
                  console.log(data);
                }}>
                  <div className="top-sections" >
                    <h1>Get In Touch</h1>
                    <p>Feel Free to drop us a line below</p>
                  </div>
                  <div>
                    <input type="text" placeholder="Your Name" name="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input type="email" placeholder="Email id" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="number" placeholder="Phone Number" name="Number" value={number} onChange={(e) => setNumber(e.target.value)} ></input>
                    <input type="text" placeholder="Message" name="Message" value={message} onChange={(e) => setMessage(e.target.value)}></input>
                  </div>
                  <button>Submit</button>
                </form>

              </div>



            </div>
          </div>

          <div className="footer-contact-caintanier">
            <div className="footer-section1">
              {/* <img src={teamImg}></img> */}
              <div className="inner-footer-section1">
              <p>Hire <span style={{ color: "#FBB03B" }}>ON-Demand</span>  project developers & turn </p>
              <p>YOUR IDEA INTO <span style={{ color: "#FBB03B" }}>REALITY</span>...</p>
                
                 <Link to='/careers'> <button>Explore More</button></Link>
              </div>

            </div>

            <div className="footer-section2">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6202141870353!2d77.3608919058372!3d28.611168187253696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57560ec22b9%3A0x95828bd54474426!2sMetaversity%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1674806731623!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", background: "linear-gradient(90.56deg, rgba(10, 47, 140, 0.8) 0.49%, rgba(37, 137, 202, 0.8) 99.55%)" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <img src={locationOfMetaversity} alt="" />
              <a href="https://goo.gl/maps/DNJg6vdHCEk1HvqZ6"><button>View More</button> </a>
            </div>
          </div>
        </div>
        <div className="res_fotter">
          <FooterDetails></FooterDetails>
          {/* <Footer></Footer> */}
        </div>
      </Layout>


    </>

  );

};

export default contactUs;
