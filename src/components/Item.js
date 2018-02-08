import styled from 'styled-components';

// It's not necessary to use all of them: Less is more!
import * as DISPLAYS from '../constants/display';

// Desktop First: Go top down from largest to smallest with max-width/max-height
const Item = styled.div`
  margin: 10px;
  padding: 10px;
  color: #fff;
  display: flex;

  background: #000;

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
    (max-width: ${DISPLAYS.SMALL_SMALL.width}px) and
    (max-height: ${DISPLAYS.SMALL_SMALL.height}px) {
      background: #116611;
      flex-direction: column;
  }
`;

// Horizontal layouts should only be addressed with width media queries
// Do: Put this media query in between the other two media queries above
// Do: Remove the flex-direction: column; from the last media query
// @media
//   (max-width: ${DISPLAYS.SMALL_SMALL.width}px) {
//     flex-direction: column;
// }

export default Item;
