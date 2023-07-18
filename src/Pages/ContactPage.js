import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [formValid, setFormValid] = useState(false);
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  // Add a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = event.target;

    // Check if the form is valid
    if (form.checkValidity()) {
      // The form is valid, so you can submit it or do other actions as needed

      emailjs
        .sendForm(
          "service_jqumgn6",
          "template_gzl4rma",
          form,
          "unSWX5NSVF5m6lcz5"
        )
        .then(
          (result) => {
            alert("Email sent succesfully");
            console.log(result.text);
          },
          (error) => {
            alert(error.text);
            console.log(error.text);
          }
        );
      form.reset();
      // Reset the form's validity
      setFormValid(false);
    } else {
      // The form is invalid, so you can show an error message or do other actions as needed
      alert("Please Check the Form because is invalid");

      // Set the form's validity to true to trigger HTML5 validation
      setFormValid(true);
    }
  };
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            {/* Add the onSubmit event listener to the form element */}
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                {/* Add the required attribute to the input element */}
                <input required type="text" id="name" name="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                {/* Add the type="email" attribute to the input element */}
                <input type="email" id="email" required name="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input required type="text" id="subject" name="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                {/* Add the required attribute to the textarea element */}
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="form-field f-button">
                {/* Add the disabled attribute to the button element if the form is invalid */}
                <PrimaryButton title={"Send Email"} disabled={!formValid} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title={"Phone"} icon={phone} cont1={"+38349433844"} />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"suelsaraqi1@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Rruga Uçk B1 52"}
              cont2={"Prishtine"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
