import React from "react";
import "./About.css";
import aboutImage from "../../assets/aboutme.png";
import meImage from "../../assets/me.png";
import { BackButton } from "../Shared/BackButton";

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="about-container">
      <div className="about-left">
        <BackButton onBack={onBack} />
        <img src={aboutImage} alt="about Card" />
      </div>

      <div className="about-right">
        <div className="about-content">
          <div className="intro-photo">
            <h1> Hi, I'm Alex </h1>
            <img className="my-photo" src={meImage} alt="about Card" />
          </div>
          <p>
            I'm a Full Stack Software Engineer based in Los Angeles (and
            sometimes New York). I have a passion for building meaningful
            software, with an emphasis on <b>impact</b>, <b>performance</b>, and{" "}
            <b>user-first design</b>. Over the past few years, I’ve had the
            opportunity to work on awesome products, focusing on crafting
            scalable, reliable solutions that deliver real value to people.
          </p>
          <p>
            I thrive in environments where collaboration and creativity lead to
            innovation, and I’m always looking for the next opportunity to make
            a lasting impact through technology.
          </p>
          <br />
          <p>
            Fun Fact: I actually don't know how tarot cards work. I just like
            the way they look.
          </p>
          <div>
            <h3>Contact</h3>
            <div>
              <a
                href="https://www.linkedin.com/in/alex-virga-285174116/"
                target="_blank"
              >
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/alexvirga" target="_blank">
                Github
              </a>
            </div>
            <div>
              <a href="mailto:alexander.virga@gmail.com" className="email">
                alexander.virga@gmail.com
              </a>
              <span> | </span>
              <span>732-687-7992</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
