import React from 'react';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// styled components
import * as S from './styles';
import { ScreenReaderText } from '../UI/ScreenReaderText';

const Footer = () => (
	<S.Footer>
		<S.Copy>
			© Borderlands Playthrough Generator {new Date().getFullYear()}.
			<br />
			All rights reserved. Various trademarks held by their respective owners.
		</S.Copy>

		<S.IconLink href='https://twitter.com/andrew_devsrc' target='_blank' rel='noopener noreferrer'>
			<FontAwesomeIcon className='footer__icon' icon={faTwitter} size='lg' />
			<ScreenReaderText>Go to my Twitter</ScreenReaderText>
		</S.IconLink>
	</S.Footer>
);

export default Footer;
