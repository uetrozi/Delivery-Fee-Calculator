import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders a form with 4 Input fields: 'cartValue', 'deliveryDistance' 'numberOfItems' and 'orderTime'", () => {
  render(<App />);
  const form = screen.getByRole("textbox", {
    name: /Delivery Fee Calculator/i,
  });

  expect(form).toBeInTheDocument();
});
