import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2022 - 2022"}
            title={"Build Responsive Real-World Websites with HTML and CSS"}
            subTitle={"Udemy"}
            text={
              "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid"
            }
          />
          <ResumeItem
            year={"2022 - 2022"}
            title={"The Complete JavaScript Course 2023: From Zero to Expert"}
            subTitle={"Udemy"}
            text={
              "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!"
            }
          />
          <ResumeItem
            year={"2022 - 2022"}
            title={"Modern React with Redux 2023 Update"}
            subTitle={"Udemy"}
            text={
              "Master React and Redux Toolkit. Includes RTK Query, tons of custom hooks, and more! Course 100% Updated November 2022"
            }
          />
          <ResumeItem
            year={"2022 - 2022"}
            title={"JavaScript - The Complete Guide 2023, Beginner + Advanced"}
            subTitle={"Udemy"}
            text={
              "Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2023."
            }
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={
              'React-"The Complete Guide (incl Hooks, React Router, Redux)'
            }
            subTitle={"Udemy"}
            text={
              "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!"
            }
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={'The Complete Web Developer "Zero to Mastery'}
            subTitle={"Udemy"}
            text={
              "Learn to code and become a Web Developer with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!"
            }
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={'Cacttus Education "JavaScript Training'}
            subTitle={"Live Course on (Cacctus Education)"}
            text={"Learn the basic fundamentals about JavaScript"}
          />
          <ResumeItem
            year={"2020 - 2021"}
            title={'ICK "Web Design HTML, CSS, JavaScript'}
            subTitle={"Live Course on (ICK)"}
            text={"Learn the basic fundamentals Web Design"}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={briefcase} title={"Work Experience"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2023 - 2023 Present"}
            title={"Software Developer"}
            subTitle={"Tech Frame"}
            text={
              "Creating a CRM which is a s a comprehensive (Customer Relationship Management) web application designed specifically for managing and organizing candidate information throughout the hiring process. It offers a user-friendly interface that streamlines the recruitment process, allowing you to efficiently store, filter, and shortlist candidates for various job positions. "
            }
          />
          <ResumeItem
            year={"2022 - 2022"}
            title={"Front-End Developer"}
            subTitle={"BrainXpand"}
            text={
              "Developed UI/UX components using ReactJS for a startup company. Utilized Storybook for organizing and testing components. Worked on yFiles diagrams to create interactive graphs and charts. "
            }
          />
          <ResumeItem
            year={"2022 - 2022"}
            title={"Front-End Developer Intern"}
            subTitle={"Ellipsis Drive"}
            text={
              "Created a startups website using Gatsby, a React-based framework. Utilized GraphQL to query data from the Prismic CMS and populate the website."
            }
          />
          <ResumeItem
            year={"2020 - 2021"}
            title={"Front-End Developer"}
            subTitle={"XY-Technologies"}
            text={
              "Developed the user experience of web pages and applications through the creation of UI/UX components"
            }
          />
          <ResumeItem
            year={"2020 - 2021"}
            title={"Front-End Developer Intern"}
            subTitle={"Xhezacademy"}
            text={
              "I was given daily tasks mainly focused in front end by using HTML, CSS and JavaScript."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
