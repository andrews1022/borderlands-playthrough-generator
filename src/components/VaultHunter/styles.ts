import styled from 'styled-components';

export const TagList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1.5% 0;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

export const Tag = styled.li`
	background-color: ${({ theme }) => theme.shades.whiteSmoke};
	border-radius: 0.625rem;
	font-size: 1.25rem;
	font-weight: 600;
	margin: 0 0.5%;
	padding: 1rem;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		flex: 0 0 45%;
		margin: 2.5%;
	}
`;
