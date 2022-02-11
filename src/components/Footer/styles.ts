import styled from 'styled-components';

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.shades.whiteSmoke};
	color: ${({ theme }) => theme.colors.sealBrown};
	margin-top: auto;
	padding: 1% 0;
	text-align: center;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		padding: 4% 0;
	}
`;

export const Copy = styled.p`
	font-size: 0.875rem;
	line-height: 1.45;
	margin-bottom: 0.5%;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		margin-bottom: 2.5%;
	}
`;

export const IconLink = styled.a`
	margin: 0 0.375%;
	transition: all 175ms ease-in-out;

	@media (hover) {
		&:hover,
		&:active,
		&:focus {
			opacity: 0.66;
		}
	}
`;
