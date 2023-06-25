import "./HeroImgStyles.css";
import React from "react";
import BGImg from "../assets/bg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="homepageBGImage" src={BGImg}
         alt="BGImg"/>
      </div>
      <div className="Content">
        <p>Hi , I am Abhimanyu Sah</p>
        <h1>Game Developer</h1>
         <Link to="/Project" className="btn" >Projects</Link>
         <Link to="/Contact" className="btn btn-light" >Contact</Link>
      </div>
    </div>
  );
};

export default HeroImg;
