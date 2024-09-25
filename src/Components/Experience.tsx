import experienceImage from "../assets/experience.png";
import "./styles.css";

interface ExperienceProps {
  onBack: () => void;
}

const Experience = ({ onBack }: ExperienceProps) => {
  return (
    <div className="experience-container">
      <div className="experience-left">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <img src={experienceImage} alt="Experience Card" />
      </div>

      <div className="experience-right">
        <div className="resume-content">
          <h1>Professional Experience</h1>
          <h3>Resilia • 10/2020 - 2024 • Software Engineer II</h3>
          <ul>
            <li>
              Accelerated platform growth by developing and scaling core
              user-facing features from inception, contributing to onboarding
              over 15,000 nonprofit users and aiding in securing $35M in Series
              B funding.
            </li>
            <li>
              Architected and implemented a multi-tiered Role-Based Access
              Control (RBAC) framework across frontend, backend, middleware, and
              authentication layers, enhancing security compliance and user data
              protection.
            </li>
            <li>
              Led development of critical features including interactive data
              visualizations with Recharts, custom infographics, dynamic
              dashboards, onboarding flows, and Stripe-based payment systems.
            </li>
            <li>
              Optimized deployment pipelines by introducing the company's first
              modular architecture using Docker, Kubernetes, AWS, and GitHub
              Actions, reducing build and deployment times by over 40%.
            </li>
            <li>
              Mentored team members, fostering knowledge sharing and improving
              overall team efficiency.
            </li>
          </ul>
          <h3>Resilia • Software Engineer I</h3>
          <ul>
            <li>
              Developed a comprehensive database of over 60,000 grant makers and
              800,000 grants using IRS 990 data, enabling nonprofits to
              efficiently identify funding opportunities.
            </li>
            <li>
              Pioneered the implementation of a custom React server-side
              rendering framework, improving load times by 60% and enhancing
              scalability to support rapid user growth.
            </li>
          </ul>
          <h3>GroupM • 01/2018 - 05/2019 • Direct Response TV Media Planner</h3>
          <ul>
            <li>
              Oversaw planning, reporting, traffic, and analytics for multiple
              Fortune 500 clients with billings over $80MM.
            </li>
          </ul>
          <h3>ABCO • 01/2017 - 01/2018 • Technology Operations</h3>
          <ul>
            <li>
              Implemented new software applications for department-specific
              needs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
