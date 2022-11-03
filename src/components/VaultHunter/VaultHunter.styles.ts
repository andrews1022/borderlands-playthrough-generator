import styled from "styled-components";

export const Row = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5% 0;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
