import styled, { withTheme } from 'styled-components';

import * as DISPLAYS from '../constants/display';
import * as LAYOUTS from '../constants/layouts';

const ItemsByTheme = {
  [LAYOUTS.NONE]: `
    @media
      (max-width: ${DISPLAYS.LARGE_LARGE.width}px) and
      (max-height: ${DISPLAYS.LARGE_LARGE.height}px) {
        background: #550000;
    }

    @media
      (max-width: ${DISPLAYS.LARGE_MEDIUM.width}px) and
      (max-height: ${DISPLAYS.LARGE_MEDIUM.height}px) {
        background: #D46A6A;
    }

    @media
      (max-width: ${DISPLAYS.SMALL_SMALL.width}px) {
        flex-direction: column;
    }

    @media
      (max-width: ${DISPLAYS.SMALL_SMALL.width}px) and
      (max-height: ${DISPLAYS.SMALL_SMALL.height}px) {
        background: #116611;
    }
  `,
  [LAYOUTS.TLS_SMALL]: `
    @media
      (max-width: ${DISPLAYS.LARGE_LARGE.width}px) and
      (max-height: ${DISPLAYS.LARGE_LARGE.height}px) {
        background: #11073B;
    }

    @media
      (max-width: ${DISPLAYS.LARGE_MEDIUM.width}px) and
      (max-height: ${DISPLAYS.LARGE_MEDIUM.height}px) {
        background: #867DB0;
    }
  `
};

const Item = styled.div`
  margin: 20px;
  color: #fff;
  display: flex;

  background: #000;

  ${props => ItemsByTheme[props.theme.layout]}
`;

export default withTheme(Item);
