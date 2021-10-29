import styled from 'styled-components';

const Loader = styled.div`
	@keyframes loaderSpin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	animation: loaderSpin 1s linear infinite;
	border: 1rem solid ${({ theme }) => theme.shades.whiteSmoke};
	border-top: 1rem solid ${({ theme }) => theme.colors.turbo};
	border-radius: 50%;
	height: 7.5rem;
	margin: 0 auto 2% auto;
	width: 7.5rem;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		height: 6rem;
		margin: 0 auto 4% auto;
		width: 6rem;
	}
`;

export default Loader;
