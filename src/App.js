import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'}
`;

class App extends Component {
  render() {
    return (
      <Title color="wheat">Gallery Application</Title>
    );
  }
}

export default App;
