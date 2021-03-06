import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  appearance: none;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  cursor: pointer;
  position: relative;
  text-align: center;
  outline: 0;
  white-space: nowrap;
  user-select: none;
  padding: 1em 1.5em;
  border: 0;
  display: block;
  font-size: 1.5rem;
  vertical-align: middle;
  &:disabled {
    cursor: default;
  }
  &,
  &::after {
    border-radius: 50vw;
    transition: 0.3s ease;
  }
  &::after {
    content: "";
    border-radius: 50vw;
    display: block;
    position: absolute;
    top: 0;
    left: 6%;
    right: 6%;
    bottom: 0;
    z-index: -1;
    box-shadow: 0 16px 6px -8px rgba(34, 25, 36, 0.2);
    transform: translateY(-10px);
    opacity: 0;
  }
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    &::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default function Button(props) {
  return <StyledButton {...props} />
}
