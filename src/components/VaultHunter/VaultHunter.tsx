import { useMemo } from "react";

// styled components
import * as S from "./VaultHunter.styles";
import { Button } from "../UI/Button";
import { Heading } from "../UI/Heading";
import { InnerWrapper } from "../UI/InnerWrapper";
import { ReminderText } from "../UI/ReminderText";
import { Tag } from "../UI/Tag";

// custom hooks
import useGenerator from "../../hooks/useGenerator";

// data
import vaultHunters from "../../data/vaultHunters";

// constants
import { STEP_VAULT_HUNTER } from "../../constants/steps";

// utils
import { getRandomArrayIndex } from "../../utils/getRandomArrayIndex";

const VaultHunter = () => {
  const [state, dispatch] = useGenerator();

  // reusable var
  const matchingVaultHunters = useMemo(
    () => vaultHunters.filter((hunter) => hunter.game === state.selectedGame),
    [state.selectedGame]
  );

  // event functions
  const changeStepHandler = () => {
    dispatch({
      type: "SELECT_VAULT_HUNTER",
      payload: matchingVaultHunters[getRandomArrayIndex(matchingVaultHunters)].name,
    });
  };

  return state.currentStep === STEP_VAULT_HUNTER ? (
    <InnerWrapper>
      <Heading as="h2" size="medium">
        Select Your Vault Hunter
      </Heading>

      <ReminderText>
        One of the following vault hunters below will be chosen at random for you.
      </ReminderText>

      <S.Row>
        {matchingVaultHunters.map((vaultHunter) => (
          <Tag key={vaultHunter.name}>{vaultHunter.name}</Tag>
        ))}
      </S.Row>

      <Button mode="secondary" onClick={changeStepHandler} type="button">
        Select Vault Hunter
      </Button>
    </InnerWrapper>
  ) : null;
};

export default VaultHunter;
