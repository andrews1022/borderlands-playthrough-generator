// components
import Card from "../Card/Card";

// styled components
import * as S from "./RunType.styles";
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";
import { ReminderText } from "../UI/ReminderText";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// data
import { options } from "../../data/options";

// constants
import { STEP_RUN_TYPE } from "../../constants/steps";

const RunType = (): JSX.Element | null => {
  const [state] = useGenerator();

  return state.currentStep === STEP_RUN_TYPE ? (
    <InnerWrapper>
      <Heading as="h2" size="medium">
        Select Your Run Type
      </Heading>

      <ReminderText>
        A modifier will be chosen at random based on your selection below.
      </ReminderText>

      <S.Row>
        {options.map((option) => (
          <Card key={option.name} option={option} />
        ))}
      </S.Row>
    </InnerWrapper>
  ) : null;
};

export default RunType;
