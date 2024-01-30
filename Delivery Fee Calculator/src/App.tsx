import {
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  NumberInputField,
  Text,
  Spacer,
  NumberInput,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

import "./App.css";

function App() {
  const fee = 0;

  return (
    <>
      <Container>
        <Heading>Delivery Fee Calculator</Heading>
        <form>
          <FormControl>
            <HStack>
              <Spacer />
              <InputGroup>
                <FormLabel htmlFor="cartValue"> Cart Value </FormLabel>
                <NumberInput
                  allowMouseWheel
                  min={1}
                  maxW={24}
                  defaultValue={20}
                  id="cartValue"
                  name="cartValue"
                  data-test-id="cartValue"
                  aria-label="Cart Value"
                >
                  <NumberInputField />
                </NumberInput>
                <InputRightAddon>€</InputRightAddon>
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel htmlFor="deliveryDistance">
                Delivery distance
              </FormLabel>
              <Spacer />
              <InputGroup>
                <NumberInput
                  allowMouseWheel
                  size="md"
                  maxW={24}
                  min={1}
                  defaultValue={2235}
                  id="deliveryDistance"
                  name="deliveryDistance"
                  data-test-id="deliveryDistance"
                  aria-label="Delivery Distance"
                >
                  <NumberInputField />
                </NumberInput>
                <InputRightAddon>m</InputRightAddon>
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel htmlFor="numberOfItems"> Number of Items </FormLabel>
              <Spacer />
              <NumberInput
                allowMouseWheel
                size="md"
                maxW={24}
                min={1}
                defaultValue={4}
                id="numberOfItems"
                name="numberOfItems"
                data-test-id="numberOfItems"
                aria-label="Number of Items"
              >
                <NumberInputField />
              </NumberInput>
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel htmlFor="orderTime">Order Time </FormLabel>
              <Spacer />
              <Input
                type="datetime-local"
                size="md"
                id="orderTime"
                name="orderTime"
                data-test-id="orderTime"
                aria-label="Order Time"
              ></Input>
            </HStack>
          </FormControl>

          <Button aria-label="Calculate Delivery Price" type="submit">
            {" "}
            Calculate Delivery Price
          </Button>
        </form>

        <Text>Delivery Price: {fee}</Text>
      </Container>
    </>
  );
}

export default App;
