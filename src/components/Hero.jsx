import React from "react";
import { css, react, html, github, figma, js } from "../assets";

const Hero = () => {
  return (
    <>
      <div>
        <h1 className="text-main">Hi! I am,</h1>
        <p className="text-main pt-3 text-3xl">Farhan Nandyawan Syarief</p>
        <p className="text-main text-lg "> Beginner Frontend Engineer</p>
        <div className="mt-16 flex h-[40px] gap-6">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={figma} alt="figma" />
          <img src={react} alt="react" />
          <img src={github} alt="github" />
        </div>
      </div>
    </>
  );
};

export default Hero;
