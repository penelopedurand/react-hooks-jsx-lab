import React from "react";
import { image } from "../data/data";

function About() {
  return( 
  <div id='about'>About
    <h2>About Me</h2>
    <p>Marvin is cool</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
