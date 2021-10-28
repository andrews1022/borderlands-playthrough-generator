import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	background-color: ${(props) => props.theme.shades.whiteSmoke};
	color: ${(props) => props.theme.colors.sealBrown};
	margin-top: auto;
	padding: 1% 0;
	text-align: center;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		padding: 4% 0;
	}
`;

export const FooterCopy = styled.p`
	font-size: 0.875rem;
	margin-bottom: 0.5%;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		margin-bottom: 2.5%;
	}
`;

export const FooterIconLink = styled.a`
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
