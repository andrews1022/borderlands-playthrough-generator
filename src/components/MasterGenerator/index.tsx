import React from 'react';

// components
import DeterminePlaythrough from '../DeterminePlaythrough';
import Game from '../Game';
import Intro from '../Intro';
import Results from '../Results';
import RunType from '../RunType';
import VaultHunter from '../VaultHunter';

// styled components
import MasterGeneratorWrapper from './styles';

const MasterGenerator = () => (
	<MasterGeneratorWrapper>
		<Intro />
		<Game />
		<VaultHunter />
		<RunType />
		<DeterminePlaythrough />
		<Results />
	</MasterGeneratorWrapper>
);

export default MasterGenerator;
