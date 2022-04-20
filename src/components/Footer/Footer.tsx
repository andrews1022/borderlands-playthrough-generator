// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// components
import ExternalLink from '../ExternalLink/ExternalLink';

// styled components
import * as S from './Footer.styles';
import { ScreenReaderText } from '../UI/ScreenReaderText';

// constants
import { URL_TWITTER } from '../../constants/urls';

const Footer = (): JSX.Element => (
  <S.Footer>
    <S.Copy>
      © Borderlands Playthrough Generator {new Date().getFullYear()}.
      <br />
      All rights reserved. Various trademarks held by their respective owners.
    </S.Copy>

    <ExternalLink href={URL_TWITTER}>
      <FontAwesomeIcon icon={faTwitter} size='lg' />
      <ScreenReaderText>Go to my Twitter</ScreenReaderText>
    </ExternalLink>
  </S.Footer>
);

export default Footer;
