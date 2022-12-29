import React from 'react'
import styled from 'styled-components';
import personalCV from "../Suel's+Resume.pdf"

function PrimaryButton({title}) {
    return (
        <a href={personalCV} download="Suel's+Resume.pdf" target='_blank' >
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
        </a>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;
export default PrimaryButton;
