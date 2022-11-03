import styled from "styled-components";

export const Row = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.5%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
