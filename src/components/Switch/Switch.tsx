import React from "react";
import { Label, Slider, SwitchContainer } from "./Switch.style";

type Props = {
  optionOne: string;
  optionTwo: string;
  onClick: (selected: boolean) => void;
  selected: boolean;
};

const Switch = ({ optionOne, optionTwo, onClick, selected }: Props) => {
  const handleOnClick = () => onClick(!selected);

  return (
    <SwitchContainer onClick={handleOnClick}>
      <Slider selected={selected} />
      <Label selected={selected}>{optionOne}</Label>
      <Label selected={!selected}>{optionTwo}</Label>
    </SwitchContainer>
  );
};

export default Switch;
