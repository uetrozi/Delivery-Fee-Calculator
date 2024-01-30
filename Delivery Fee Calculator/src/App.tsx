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
              <FormLabel> Cart Value </FormLabel>
              <Spacer />
              <InputGroup>
                <NumberInput
                  allowMouseWheel
                  min={1}
                  maxW={24}
                  id="cartValue"
                  name="cartValue"
                  data-test-id="cartValue"
                  defaultValue={20}
                >
                  <NumberInputField />
                </NumberInput>
                <InputRightAddon>€</InputRightAddon>
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel> Delivery distance </FormLabel>
              <Spacer />
              <InputGroup>
                <NumberInput
                  allowMouseWheel
                  size="md"
                  maxW={24}
                  min={1}
                  id="deliveryDistance"
                  name="deliveryDistance"
                  data-test-id="deliveryDistance"
                  defaultValue={2235}
                >
                  <NumberInputField />
                </NumberInput>
                <InputRightAddon>m</InputRightAddon>
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel> Number of Items </FormLabel>
              <Spacer />
              <NumberInput
                allowMouseWheel
                size="md"
                maxW={24}
                min={1}
                id="numberOfItems"
                name="numberOfItems"
                data-test-id="numberOfItems"
                defaultValue={4}
              >
                <NumberInputField />
              </NumberInput>
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel>Order Time </FormLabel>
              <Spacer />
              <Input
                type="datetime-local"
                size="md"
                id="orderTime"
                name="orderTime"
                data-test-id="orderTime"
              ></Input>
            </HStack>
          </FormControl>

          <Button type="submit"> Calculate Delivery Price</Button>
        </form>

        <Text>Delivery Price: {fee}</Text>
      </Container>
    </>
  );
}

export default App;
