/* eslint-disable indent */

import styled from "styled-components";

// props type
type ButtonProps = {
  mode: "primary" | "secondary";
};

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0.25rem solid
    ${({ mode, theme }) => (mode === "primary" ? theme.colors.turbo : theme.colors.sirocco)};
  border-radius: 0.625rem;
  color: ${({ mode, theme }) => (mode === "primary" ? theme.colors.turbo : theme.colors.sirocco)};
  cursor: pointer;
  font-size: ${({ mode }) => (mode === "primary" ? "2rem" : "1.125rem")};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0.5rem 1.5rem;
  transition: all 300ms ease-in-out;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    font-size: ${({ mode }) => (mode === "primary" ? "1.625rem" : "1.25rem")};
  }

  @media (hover) {
    &:hover,
    &:active,
    &:focus {
      background-color: ${({ mode, theme }) =>
        mode === "primary" ? theme.colors.turbo : theme.colors.sirocco};
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
      color: ${({ mode, theme }) =>
        mode === "primary" ? theme.colors.sealBrown : theme.shades.whiteSmoke};
      transform: translateY(-0.25rem);
    }
  }
`;
