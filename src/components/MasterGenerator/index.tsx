import React from 'react';

// components
import DeterminePlaythrough from '../DeterminePlaythrough';
import Game from '../Game';
import Intro from '../Intro';
import Results from '../Results';
import RunType from '../RunType';
import VaultHunter from '../VaultHunter';

// styled components
import * as S from './styles';

const MasterGenerator = () => (
	<S.Wrapper>
		<Intro />
		<Game />
		<VaultHunter />
		<RunType />
		<DeterminePlaythrough />
		<Results />
	</S.Wrapper>
);

export default MasterGenerator;
