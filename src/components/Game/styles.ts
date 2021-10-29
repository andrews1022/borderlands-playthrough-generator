import styled from 'styled-components';

const ButtonRow = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.5%;

	li {
		margin: 0 0.375%;
	}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		flex-direction: column;
	}
`;

export default ButtonRow;
