import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  text-transform: capitalize;
  background-color: #fff;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: tomato;
  }
`;
