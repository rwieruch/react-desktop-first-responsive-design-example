import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border: 1px solid #000;
  padding: 20px;
  width: ${({ zoom }) => zoom * 100}px;
  height: ${({ zoom }) => zoom * 50}px;
`;

export default Button;