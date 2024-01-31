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
} from "@chakra-ui/react";



function App() {
  const dD = 2235;
  const cV = 200;
  const nI = 4;

  function CalculateFee(cV: number, dD: number, nI: number): number {
    let fee = 0;

    if (dD >= 0 && dD <= 1000) {
      fee += 2;
    } else if (dD > 1000) {
      const additionalFee: number = Math.floor((dD - 1000) / 500);
      console.log(additionalFee);
      fee += 2 + additionalFee;
    }
    console.log(fee);

    if (cV >= 200) {
      fee = 0;
    }

    console.log(fee);

    if (fee > 15) {
      fee = 15;
    }

    if (nI >= 5) {
      const itemSurcharge: number = (nI - 5) * 0.5
      fee = fee + itemSurcharge
    }

    return fee;
  }

  const result = CalculateFee(dD, cV, nI);

  console.log(result);

  return (
    <>
      <Container
        width={400}
        height={400}
        border="1px"
        borderColor="gray.200"
        borderRadius={10}
        p={4}
        display="flex"
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        <Heading>Delivery Fee Calculator</Heading>
        <form>
          <Flex pb={2}>
            <FormControl id="cartValue">
              <InputGroup>
                <FormLabel htmlFor="cartValue"> Cart Value </FormLabel>
                <Spacer />
                <NumberInput
                  allowMouseWheel
                  min={1}
                  w={24}
                  defaultValue={20}
                  id="cartValue"
                  name="cartValue"
                  data-test-id="cartValue"
                  aria-label="Cart Value"
                >
                  <NumberInputField />
                </NumberInput>
                <InputRightAddon w={12}>€</InputRightAddon>
              </InputGroup>
            </FormControl>
          </Flex>
          <Flex pb={2}>
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
            </FormControl>
          </Flex>
          <Flex pb={2}>
            <FormControl id="numberOfItems">
              <InputGroup>
                <FormLabel htmlFor="numberOfItems"> Number of Items </FormLabel>
                <Spacer />
                <NumberInput
                  allowMouseWheel
                  w={36}
                  min={1}
                  defaultValue={4}
                  id="numberOfItems"
                  name="numberOfItems"
                  data-test-id="numberOfItems"
                  aria-label="Number of Items"
                >
                  <NumberInputField />
                </NumberInput>
              </InputGroup>
            </FormControl>
          </Flex>
          <Flex pb={4}>
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
                ></Input>
              </InputGroup>
            </FormControl>
          </Flex>

          <Button aria-label="Calculate Delivery Price" type="submit">
            Calculate Delivery Price
          </Button>
        </form>

        <Text>Delivery Price: {result}</Text>
      </Container>
    </>
  );
}

export default App;
