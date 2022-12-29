import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Responsive Web Design'} 
                        paragraph={'Responsive web design is a design approach that ensures that a website layout and content are optimized for viewing on any device, including desktop computers, tablets, and smartphones.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'React JS Development'} 
                            paragraph={'React JS is a JavaScript library for building user interfaces. It is widely used for building single-page applications (SPAs) and mobile applications, and is known for its flexibility and performance.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Frameworks'} 
                        paragraph={'A framework is a set of tools, libraries, and conventions that are designed to help developers build applications more efficiently. Frameworks can provide a structure for building an application.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
