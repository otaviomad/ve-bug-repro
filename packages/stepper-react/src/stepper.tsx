import { ChevronRightIcon } from "icons-react";
import { useState } from "react";
import { Button } from "button-react";
import {
  stepperContainer,
  stepperButton,
  stepperInput,
  leftButtonIcon,
} from "stepper-styles";

export const Stepper = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={stepperContainer}>
      <Button className={stepperButton} onClick={() => setCount(count - 1)}>
        <ChevronRightIcon className={leftButtonIcon} />
      </Button>
      <input className={stepperInput} type="number" value={count} readOnly />
      <Button className={stepperButton} onClick={() => setCount(count + 1)}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
