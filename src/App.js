import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'};
  font-size: 2.5em;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  ${props => {
    if (props.showBorder) {
      return `
        border: 1px solid white;
        border-radius: 8px;
      `;
    }
  }}
`;

class App extends Component {
  render() {
    const thumbnails = Array.from({ length: 5 }, (_, index) => {
      const showBorder = index % 2 === 0;
      return <Thumbnail key={index + 1} src={require(`../assets/thumbnail-${index + 1}.jpeg`)} showBorder={showBorder} />;
    });

    return (
      <div className={this.props.className}>
        <Title color="wheat">Gallery Application</Title>
        <Gallery>
          {thumbnails}
        </Gallery>
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

