import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("User fills out all 4 input fields with valid values, clicks the action button and the correct fee will be displayed", async () => {
  const user = userEvent.setup();
  render(<App />);

  const inputCartValue = screen.getByLabelText(/Cart Value/i);
  const inputDeliveryDistance = screen.getByLabelText(/Delivery Distance/i);
  const inputNumberOfItems = screen.getByLabelText(/Number of Items/i);
  const inputOrderTime = screen.getByLabelText(/Order Time/i);
  const buttonSubmit = screen.getByLabelText(/Calculate Delivery Price/i);
  const fee = screen.getByText(/^Delivery Price/i);

  await user.clear(inputCartValue);
  await user.type(inputCartValue, "20");
  await user.clear(inputDeliveryDistance);
  await user.type(inputDeliveryDistance, "2235");
  await user.clear(inputNumberOfItems);
  await user.type(inputNumberOfItems, "4");
  await user.clear(inputOrderTime);
  await user.type(inputOrderTime, "(2024, 1, 31, 12)");

  await user.click(buttonSubmit);

  expect(fee).toHaveTextContent(/5.00 €/i);
});

test("Delivery Price is intially invisible until the button to calculate it is pressed", async () => {
  const user = userEvent.setup();
  render(<App />);

  const buttonSubmit = screen.getByLabelText(/Calculate Delivery Price/i);
  const fee = screen.getByText(/^Delivery Price/i);

  expect(fee).toBeInTheDocument();
  expect(fee).not.toBeVisible();

  await user.click(buttonSubmit);

  expect(fee).toBeVisible();
});

test("All input fields have default values", async () => {
  render(<App />);

  const inputCartValue = screen.getByLabelText(/Cart Value/i);
  const inputDeliveryDistance = screen.getByLabelText(/Delivery Distance/i);
  const inputNumberOfItems = screen.getByLabelText(/Number of Items/i);
  const inputOrderTime = screen.getByLabelText(/Order Time/i);

  expect(inputCartValue).toHaveValue();
  expect(inputDeliveryDistance).toHaveValue();
  expect(inputNumberOfItems).toHaveValue();
  expect(inputOrderTime).toHaveValue();
});
