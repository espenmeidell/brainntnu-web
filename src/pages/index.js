import React from "react";

import logo from "../images/brain.svg";

import styled from 'styled-components';

const Wrapper = styled.div`
    margin:0 auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: lightgrey;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-self: center;
    display: block;
    max-width: 100vh;

`

const ImageWrapper = styled.div`
    margin: auto;
    align-self: center;
    display: block;
    width: 60%;
    max-width: 100vh;
    opacity: 0.5;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    
    @keyframes shake {

    0% {transform: translate(1px, 1px) rotate(0deg); filter: hue-rotate(0deg);}
    10% { transform: translate(-1px, -1px) rotate(-1deg); }
    20% { transform: translate(0px, 0px) rotate(1deg); }
    30% { transform: translate(0px, 2px) rotate(0deg); }
    40% { transform: translate(1px, 0px) rotate(1deg); }
    50% { transform: translate(-1px, 1px) rotate(0deg); }
    60% { transform: translate(0px, 1px) rotate(1deg); }
    70% { transform: translate(1px, 0px) rotate(0deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 1px) rotate(0deg); }
    100% { transform: translate(1px, -1px) rotate(-1deg); filter: hue-rotate(360deg);}
}

`


export default () => (
    <Wrapper>
        <ImageWrapper>
            <img src={logo } alt = "Logo"/>
            <TextWrapper>
                <h1>
                    Coming soon...
                </h1>
            </TextWrapper>
        </ImageWrapper>

    </Wrapper>
);
