import React from 'react';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// styled components
import { FooterWrapper, FooterCopy, FooterIconLink } from './styles';

const Footer = () => (
	<FooterWrapper>
		<FooterCopy>
			© Borderlands Playthrough Generator {new Date().getFullYear()}.
			<br />
			All rights reserved. Various trademarks held by their respective owners.
		</FooterCopy>

		<FooterIconLink
			className='footer__icon-link'
			href='https://twitter.com/andrew_devsrc'
			target='_blank'
			rel='noopener noreferrer'
		>
			<FontAwesomeIcon className='footer__icon' icon={faTwitter} size='lg' />
		</FooterIconLink>
	</FooterWrapper>
);

export default Footer;
