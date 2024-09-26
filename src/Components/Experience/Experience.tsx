import experienceImage from "../../assets/experience.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import javascriptLogo from "../../assets/logos/js-logo.svg";
import typescriptLogo from "../../assets/logos/typescript-logo.svg";
import reactLogo from "../../assets/logos/react-logo.svg";
import nodeLogo from "../../assets/logos/nodejs-logo.svg";
import postgresLogo from "../../assets/logos/postgresql-logo.svg";
import graphqlLogo from "../../assets/logos/graphql-logo.svg";
import { BackButton } from "../Shared/BackButton";

import "./Experience.css";

interface ExperienceProps {
  onBack: () => void;
}

const Experience = ({ onBack }: ExperienceProps) => {
  return (
    <div className="experience-container">
      <div className="experience-left">
        <BackButton onBack={onBack} />
        <img src={experienceImage} alt="Experience Card" />
      </div>

      <div className="experience-right">
        <div className="resume-content">
          <div className="skills-container">
            <h3> I'm great with: </h3>

            <img
              src={javascriptLogo}
              alt="Javascript Logo"
              className="tech-logo"
            />
            <img
              src={typescriptLogo}
              alt="Typescript Logo"
              className="tech-logo"
            />
            <img src={reactLogo} alt="React Logo" className="tech-logo" />
            <img src={nodeLogo} alt="Node Logo" className="tech-logo" />
            <img
              src={postgresLogo}
              alt="PostgreSQL Logo"
              className="tech-logo"
            />
            <img src={graphqlLogo} alt="Graphql Logo" className="tech-logo" />
          </div>
          <br />

          <div>
            <h2> Work </h2>
            <VerticalTimeline layout="1-column-left">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1e1e1e", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
                date="2022 - 2024"
                iconStyle={{ background: "#3d96ff", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Resilia • Software Engineer II
                </h3>
                <p>
                  {" "}
                  Led development of core features using React, Typescript, and
                  Node.js, contributing to 15,000+ nonprofit users.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1e1e1e", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
                date="2020 - 2022"
                iconStyle={{ background: "#73b5ff", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Resilia • Software Engineer I
                </h3>
                <p>
                  SaaS platform bringing grantmakers and nonprofits together to
                  maximize and track their collective impact.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1e1e1e", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
                date="2018 - 2019"
                iconStyle={{ background: "#a9d4ff", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  GroupM • Direct Response TV Media Planner
                </h3>
                <p>
                  {" "}
                  World's leading media investment company. Assisted in media
                  planning, reporting, and analytics for direct response TV
                  commercials for Fortune 500 clients.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1e1e1e", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
                date="2016 - 2018"
                iconStyle={{ background: "#dfefff", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  ABCO • Technology Operations
                </h3>
                <p>
                  Implemented new software applications for department-specific
                  needs.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1e1e1e", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
                date="2012 - 2016"
                iconStyle={{ background: "#ffffff", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  University of Scranton
                </h3>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
