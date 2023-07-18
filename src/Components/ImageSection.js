import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";
import personalCV from "../Suel's+Resume.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img
          src="https://images.unsplash.com/photo-1611024175213-fc04fdeb80ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Suel Saraçi</span>
        </h4>
        <p className="paragraph">
          Talented Software developer with a diverse set of skills that allow me
          to tackle a wide range of problems, from creating user interfaces to
          optimizing website performance. Eager to tacker more complex problems
          and continue to find ways to maximize user efficiency.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Suel Saraçi</p>
            <p>: 20</p>
            <p>: Kosovar </p>
            <p>: Albanian/ English/ A little German </p>
            <p>: Prishtine , Kosova</p>
            <p>: Software developer </p>
          </div>
        </div>
        <a href={personalCV} download="Suel's+Resume.pdf" target="_blank">
          <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 80%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
