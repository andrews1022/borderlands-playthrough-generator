import React from 'react';

// components
import DeterminePlaythrough from '../DeterminePlaythrough';
import Game from '../Game';
import Intro from '../Intro';
import Results from '../Results';
import RunType from '../RunType';
import VaultHunter from '../VaultHunter';

const MasterGenerator = () => (
	<div className='MasterGeneratorWrapper'>
		<Intro />
		<Game />
		<VaultHunter />
		<RunType />
		<DeterminePlaythrough />
		<Results />
	</div>
);

export default MasterGenerator;
