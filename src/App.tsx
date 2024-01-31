import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  NumberInputField,
  Text,
  Spacer,
  NumberInput,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Flex,
  Center,
  AbsoluteCenter,
  Box,
  VStack,
} from "@chakra-ui/react";

import calculateDeliveryFee from "./services/DeliveryFeeService";
import { useState } from "react";

function App() {
  const [fee, setFee] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const result = calculateDeliveryFee({
      cartValue: Number(formEntries.cartValue),
      deliveryDistance: Number(formEntries.deliveryDistance),
      itemCount: Number(formEntries.numberOfItems),
      orderTime: new Date(Date.parse(String(formEntries.orderTime))),
    });
    setFee(result);
  };

  return (
    <Container h={"100vh"}>
      <AbsoluteCenter w={350}>
        <Center>
          <Heading pb={20}>Delivery Fee Calculator</Heading>
        </Center>
        <form onSubmit={handleSubmit}>
          <VStack>
            <FormControl id="cartValue">
              <InputGroup>
                <FormLabel htmlFor="cartValue"> Cart Value </FormLabel>
                <Spacer />
                <NumberInput
                  allowMouseWheel
                  min={1}
                  w={24}
                  defaultValue={10}
                  id="cartValue"
                  name="cartValue"
                  data-test-id="cartValue"
                  aria-label="Cart Value"
                >
                  <NumberInputField autoFocus />
                </NumberInput>
                <InputRightAddon w={12}>€</InputRightAddon>
              </InputGroup>
            </FormControl>
            <FormControl id="deliveryDistance">
              <InputGroup>
                <FormLabel htmlFor="deliveryDistance">
                  Delivery distance
                </FormLabel>
                <Spacer />
                <NumberInput
                  allowMouseWheel
                  w={24}
                  min={1}
                  defaultValue={100}
                  id="deliveryDistance"
                  name="deliveryDistance"
                  data-test-id="deliveryDistance"
                  aria-label="Delivery Distance"
                >
                  <NumberInputField />
                </NumberInput>
                <InputRightAddon>m</InputRightAddon>
              </InputGroup>
            </FormControl>

            <FormControl id="numberOfItems">
              <InputGroup>
                <FormLabel htmlFor="numberOfItems"> Number of Items </FormLabel>
                <Spacer />
                <NumberInput
                  allowMouseWheel
                  w={36}
                  min={1}
                  defaultValue={3}
                  id="numberOfItems"
                  name="numberOfItems"
                  data-test-id="numberOfItems"
                  aria-label="Number of Items"
                >
                  <NumberInputField />
                </NumberInput>
              </InputGroup>
            </FormControl>

            <FormControl id="orderTime">
              <InputGroup>
                <FormLabel htmlFor="orderTime">Order Time </FormLabel>
                <Spacer />
                <Input
                  w={56}
                  type="datetime-local"
                  id="orderTime"
                  name="orderTime"
                  data-test-id="orderTime"
                  aria-label="Order Time"
                  defaultValue={new Date().toISOString().slice(0, 16)}
                ></Input>
              </InputGroup>
            </FormControl>
          </VStack>

          <Center pt={2}>
            <Button
              aria-label="Calculate Delivery Price"
              type="submit"
              justifySelf={"center"}
            >
              Calculate Delivery Price
            </Button>
          </Center>
        </form>
        <Text pt={2} data-test-id="fee" visibility={fee ? "visible" : "hidden"}>
          Delivery Price: {fee.toFixed(2)} €
        </Text>
      </AbsoluteCenter>
    </Container>
  );
}

export default App;
