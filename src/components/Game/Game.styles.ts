import styled from "styled-components";

export const Row = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    flex-direction: column;
  }

  li {
    margin: 0 0.375%;
  }
`;
