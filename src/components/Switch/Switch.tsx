import React from "react";
import { Label, Slider, SwitchContainer } from "./Switch.style";

type Props = {
  optionOne: string;
  optionTwo: string;
  onClick: (selected: boolean) => void;
  selected: boolean;
  compact?: boolean;
};

const Switch = ({
  optionOne,
  optionTwo,
  onClick,
  selected,
  compact = false,
}: Props) => {
  const handleOnClick = () => onClick(!selected);

  return (
    <SwitchContainer $compact={compact} onClick={handleOnClick}>
      <Slider $selected={selected} $compact={compact} />
      <Label $selected={selected} $compact={compact}>
        {optionOne}
      </Label>
      <Label $selected={!selected} $compact={compact}>
        {optionTwo}
      </Label>
    </SwitchContainer>
  );
};

export default Switch;
