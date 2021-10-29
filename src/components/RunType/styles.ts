import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styled components
import { Copy } from '../../styles/lib';

export const CardList = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-top: 1.5%;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

export const Card = styled.li`
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

export const CardTop = styled.div`
	background-color: ${({ theme }) => theme.shades.whiteSmoke};
	padding: 1rem;
`;

export const CardBottom = styled.div`
	padding: 1rem;
`;

export const CardIcon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.sirocco};
	margin-bottom: 5%;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		display: none;
	}
`;

export const CardHeading = styled.h3`
	font-size: 1.5rem;
	font-weight: 700;
`;

export const CardCopy = styled(Copy)`
	margin-bottom: 7.5%;
`;
