import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/teja_chowdary_makkena/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/food-app-teja/image/upload/v1647413501/avatars/nojifmvtaxxo1ucmlrob.jpg"
              alt="Founder"
            />
            <Typography>Sri Teja</Typography>
            <Button onClick={visitInstagram} color="primary">
              
            </Button>
            <span>
              This is a  wesbite made by @meTeja.For My Capstone Project
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UC2Txxh-34LSNlAy-JKpfnBw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/teja_chowdary_makkena/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
