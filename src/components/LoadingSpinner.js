import React from 'react';
import styled from "styled-components";

const LoadingSpinner = () => {
  return <Container>
    <img style={{padding: '300'}} src='https://i.gifer.com/ZKZg.gif' />
  </Container>;
};

export default LoadingSpinner;

const Container = styled.div`
align-items: center;
justify-content: center;
margin: 300;
height: 100%;
`