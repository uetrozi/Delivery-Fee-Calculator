import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CartValue: React.FC = () => {
  const format = (value: string) => `€` + value;
  const parse = (value: string) => value.replace(/^\€/, "");

  const [value, setValue] = useState<string>("20.00");

  console.log(value)

  return ( 
  <>
  <label htmlFor="cartValue"> Cart Value </label>
      <NumberInput
        data-test-id="cartValue"
        id="cartValue"
        size="md"
        maxW={32}
        precision={2}
        step={1.0}
        min={1}
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      </>
  );
};

export default CartValue;
