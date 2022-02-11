import styled, { css } from 'styled-components';

// type
type HeadingSize = 'small' | 'medium' | 'large';

// props
type HeadingProps = {
	size: HeadingSize;
};

const setHeadingSize = (size: HeadingSize) => {
	switch (size) {
		case 'small': {
			return css`
				font-size: 1.5rem;
				letter-spacing: 0px;
			`;
		}

		case 'medium': {
			return css`
				font-size: 2.75rem;
				letter-spacing: -2px;
			`;
		}

		case 'large': {
			return css`
				font-size: clamp(4rem, 5vw, 5.5rem);
				letter-spacing: -2px;
			`;
		}

		default: {
			return css``;
		}
	}
};

// NOTE: make sure to use the as='' prop for dyanmic heading elements!
export const Heading = styled.div<HeadingProps>`
	font-weight: 800;
	line-height: 1.25;

	${(props) => setHeadingSize(props.size)}
`;
