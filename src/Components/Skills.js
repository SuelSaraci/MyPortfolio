import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"90%"} text={"90%"} />
          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
          <ProgressBar title={"SASS"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Tailwind CSS"} width={"100%"} text={"100%"} />
          <ProgressBar title={"JavaScript"} width={"90%"} text={"90%"} />
          <ProgressBar title={"React JS"} width={"100%"} text={"100%"} />
          <ProgressBar title={"Next JS"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Gatsby JS"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Storybook"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Cypress"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Redux"} width={"70%"} text={"70%"} />
          <ProgressBar title={"React Query"} width={"70%"} text={"70%"} />
          <ProgressBar title={"TypeScript"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Vue Js"} width={"40%"} text={"40%"} />
          <ProgressBar title={"Node Js"} width={"40%"} text={"40%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
