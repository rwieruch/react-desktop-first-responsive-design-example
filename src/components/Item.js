import styled from 'styled-components';

import {
  SMALL_SMALL,
  // It's not necessary to use all of them: Less is more!
  // SMALL_MEDIUM,
  // SMALL_LARGE,
  // LARGE_SMALL,
  LARGE_MEDIUM,
  LARGE_LARGE,
} from '../constants/display';

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
// Do: Put this media query in between the other two media queries above
// Do: Remove the flex-direction: column; from the last media query
// @media
//   (max-width: ${SMALL_SMALL.width}px) {
//     flex-direction: column;
// }

const ItemParagraph = styled.p`
  flex: 1 1 100%;
`;

export {
  ItemParagraph,
};

export default Item;
