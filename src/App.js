import React, { Component } from 'react';
import styled from 'styled-components';
import loremIpsum from 'lorem-ipsum';

import {
  SMALL_SMALL,
  // It's not necessary to use all of them: Less is more!
  // SMALL_MEDIUM,
  // SMALL_LARGE,
  // LARGE_SMALL,
  LARGE_MEDIUM,
  LARGE_LARGE,
} from './constants/display';

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

// Desktop First: Go top down from largest to smallest with max-width/max-height
const Item = styled.div`
  margin: 20px;
  color: #fff;
  display: flex;

  background: #000;

  @media
    (max-width: ${LARGE_LARGE.width}px) and
    (max-height: ${LARGE_LARGE.height}px) {
      background: #550000;
  }

  @media
    (max-width: ${LARGE_MEDIUM.width}px) and
    (max-height: ${LARGE_MEDIUM.height}px) {
      background: #D46A6A;
  }



  @media
    (max-width: ${SMALL_SMALL.width}px) and
    (max-height: ${SMALL_SMALL.height}px) {
      background: #116611;
      flex-direction: column;
  }
`;

// Horizontal layouts should only be addressed with width media queries
// @media
//   (max-width: ${SMALL_SMALL.width}px) {
//     flex-direction: column;
// }

const ItemParagraph = styled.p`
  flex: 1 1 100%;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border: 1px solid #000;
  height: 25px;
  width: 75px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Nav>
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
            <Button type="button" onClick={() => {}}>Send</Button>
          </ListActions>
        </Content>
      </Container>
    );
  }
}

export default App;
