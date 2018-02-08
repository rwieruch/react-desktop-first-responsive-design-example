import React, { Component } from 'react';
import styled from 'styled-components';
import loremIpsum from 'lorem-ipsum';

import Select from './Select';
import Button from './Button';
import Item from './Item';
// import Item from './ItemThemed';

import * as ZOOMS from '../constants/zoom';

const Container = styled.div`
  flex: 1;
  display: flex;

  font-size: ${(props) => 1 * props.zoom}em;
`;

const Nav = styled.nav`
  border-right: 1px solid #bbb;
  flex-basis: 20%;
  min-width: 150px;
  overflow-y: auto;
  background-color: #24292e;
  color: #fff;
`;

const NavItem = styled.div`
  border-bottom: 1px solid #bbb;
  padding: 10px;
`;

const Content = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ListActions = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-end;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 1,
      navigation: new Array(15).fill(0).map(loremIpsum),
      list: new Array(50).fill(0).map(loremIpsum),
    };

    this.handleZoomChange = this.handleZoomChange.bind(this);
  }

  handleZoomChange(zoom) {
    this.setState({ zoom });
  }

  // <NavItem>
  //   <Select
  //     value={this.state.zoom}
  //     options={[
  //       { label: '100%', value: ZOOMS.M },
  //       { label: '120%', value: ZOOMS.L },
  //       { label: '150%', value: ZOOMS.XL },
  //     ]}
  //     handleChange={this.handleZoomChange}
  //   >
  //     Change Zoom
  //   </Select>
  // </NavItem>

  render() {
    return (
      <Container zoom={this.state.zoom}>
        <Nav>
          {this.state.navigation.map((v, k) =>
            <NavItem key={k}>
              <h4>{v}</h4>
            </NavItem>
          )}
        </Nav>
        <Content>
          <List>
            {this.state.list.map((v, k) =>
              <Item key={k}>
                <ItemParagraph>{v}</ItemParagraph>
                <ItemParagraph>{v}</ItemParagraph>
              </Item>
            )}
          </List>
          <ListActions>
            <Button
              type="button"
              zoom={this.state.zoom}
              onClick={() => {}}
            >
              Send
            </Button>
          </ListActions>
        </Content>
      </Container>
    );
  }
}

const ItemParagraph = styled.p`
  flex: 1 1 100%;
`;

export default App;
