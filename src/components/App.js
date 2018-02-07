import React, { Component } from 'react';
import styled from 'styled-components';
import loremIpsum from 'lorem-ipsum';

import Select from './Select';
import Button from './Button';
import Item from './Item';
// import Item from './ItemThemed';

const Container = styled.div`
  flex: 1;
  display: flex;
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
    };

    this.handleZoomChange = this.handleZoomChange.bind(this);
  }

  handleZoomChange(zoom) {
    this.setState({ zoom });
  }

  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <Select
              value={this.state.zoom}
              options={[
                { label: '100%', value: 1 },
                { label: '120%', value: 1.2 },
              ]}
              handleChange={this.handleZoomChange}
            >
              Change Zoom
            </Select>
          </NavItem>
          {new Array(15).fill(0).map((i, k) =>
            <NavItem key={k}>
              {loremIpsum()}
            </NavItem>
          )}
        </Nav>
        <Content>
          <List>
            {new Array(50).fill(0).map((i, k) =>
              <Item key={k}>
                <ItemParagraph>{loremIpsum()}</ItemParagraph>
                <ItemParagraph>{loremIpsum()}</ItemParagraph>
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
