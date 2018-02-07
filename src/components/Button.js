import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border: 1px solid #000;
  width: ${({ zoom }) => zoom * 150}px;
  height: ${({ zoom }) => zoom * 75}px;
`;

export default Button;