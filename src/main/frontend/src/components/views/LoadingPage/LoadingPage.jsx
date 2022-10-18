import React from 'react';
import styled from "styled-components";


import './Loading.css';

function LoadingPage(){

 return(
     <Wrapper>
         <LoadingText>Loading.</LoadingText>
     </Wrapper>
 );
}

export default LoadingPage;

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`;
const LoadingText = styled.p`
    content:'Loading.';
    animation: loadingText 1.5s linear 0s normal infinite none;
`;