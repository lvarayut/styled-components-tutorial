import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'};
  font-size: 2.5em;
`;

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title color="wheat">Gallery Application</Title>
      </div>
    );
  }
}

export default styled(App)`
  background-color: chocolate;
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding-top: 30px;
`;

