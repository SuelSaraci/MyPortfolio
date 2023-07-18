import React, { useEffect } from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import AOS from "aos";

import Particle from "../Components/Particle";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1 data-aos="zoom-in-left" data-aos-once="true">
          Hi, I'm <span>Suel Saraçi</span>
        </h1>
        <p data-aos="fade-left" data-aos-once="true">
          Talented Software developer with a diverse set of skills that allow me
          to tackle a wide range of problems, from creating user interfaces to
          optimizing website performance. Eager to tacker more complex problems
          and continue to find ways to maximize user efficiency.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/suel-s-a37624171/"
            className="icon i-Linkedin"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/SuelSaraci" className="icon i-github">
            <GithubIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePage;
