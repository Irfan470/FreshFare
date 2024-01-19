import React from 'react'
import styled, { css } from 'styled-components';
const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-right: 20px;

  ${(props) =>
    props.primary &&
    css`
      background-color: #28a745;
    `}
  ${(props) =>
    props.small &&
    css`
      background-color: #333;
      padding: 1px 10px;
      font-size: 14px;

    `}
`;

export default function Button({children, ...rest}) {
  return (
    <StyledButton{...rest}>{children}</StyledButton>
  )
}
