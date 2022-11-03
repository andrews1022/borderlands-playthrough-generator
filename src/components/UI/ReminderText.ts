import styled from "styled-components";

export const ReminderText = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  margin-top: 0.625%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    margin-top: 2%;
  }
`;
