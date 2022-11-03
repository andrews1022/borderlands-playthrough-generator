import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Copy } from "../UI/Copy";

export const Wrapper = styled.li`
  border: 0.25rem solid ${({ theme }) => theme.shades.whiteSmoke};
  border-radius: 0.625rem;
  flex: 0 0 17.5%;
  margin: 0 1%;
  transition: all 300ms ease-in-out;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    flex: 0 0 44.5%;
    margin: 2.5%;
  }

  &:hover {
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-0.25rem);
  }
`;

export const Top = styled.div`
  background-color: ${({ theme }) => theme.shades.whiteSmoke};
  padding: 1rem;
`;

export const Bottom = styled.div`
  padding: 1rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.sirocco};
  margin-bottom: 5%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    display: none;
  }
`;

export const CardCopy = styled(Copy)`
  margin-bottom: 7.5%;
`;
