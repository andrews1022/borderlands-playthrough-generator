import styled from 'styled-components';
import { Copy } from '../../styles/lib';

export const MainHeading = styled.h1`
	font-size: 5.5rem;
	font-weight: 800;
	letter-spacing: -0.25rem;
	line-height: 1.25;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		font-size: 4rem;
	}
`;

export const Tagline = styled(Copy)`
	margin: 1.5% 0;
`;
