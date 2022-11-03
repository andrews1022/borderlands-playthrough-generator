import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1.5% auto;
  width: 60%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    margin: 3.5% auto;
    width: 90%;
  }
`;

export const Result = styled.span`
  color: ${({ theme }) => theme.colors.saddleBrown};
  font-size: 1.25rem;
  font-weight: 700;
`;
