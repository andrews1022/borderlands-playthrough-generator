import React, { useContext } from 'react';

// context
import GeneratorContext from '../../context/generatorContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';

// types
import { MainOption } from '../../types/types';

// props
type CardProps = {
	option: MainOption;
};

const Card = ({ option }: CardProps) => {
	const generatorContext = useContext(GeneratorContext);

	// event functions
	const changeStepHandler = (optn: MainOption) => {
		generatorContext.generatorDispatch({ type: 'SELECT_RUN_TYPE', payload: optn.name });
	};

	return (
		<S.Wrapper>
			<S.Top>
				<S.Icon icon={option.icon} size='3x' />
				<Heading as='h3' size='small'>
					{option.name}
				</Heading>
			</S.Top>

			<S.Bottom>
				<S.CardCopy>
					{option.name === 'Allegiance' ? 'An' : 'A'} {option.name} run {option.description}.
				</S.CardCopy>

				<Button mode='secondary' onClick={() => changeStepHandler(option)} type='button'>
					Select
				</Button>
			</S.Bottom>
		</S.Wrapper>
	);
};

export default Card;
