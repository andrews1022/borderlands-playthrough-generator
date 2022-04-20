import React from 'react';

// components
import DeterminePlaythrough from '../DeterminePlaythrough/DeterminePlaythrough';
import Game from '../Game/Game';
import Intro from '../Intro/Intro';
import Results from '../Results/Results';
import RunType from '../RunType/RunType';
import VaultHunter from '../VaultHunter/VaultHunter';

// styled components
import * as S from './MasterGenerator.styles';

const MasterGenerator = (): JSX.Element => (
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
