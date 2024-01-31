import { DeliveryFeeForm } from "../models/DeliveryFeeForm";
import calculateFee from "./DeliveryFeeService";

test("if cV is less than 10 the orderSurcharge will be the difference between the cV and 10", () => {
  const given: DeliveryFeeForm = {
    cartValue: 1,
    deliveryDistance: 1,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(11);
});

test("if cV is less than 10 the orderSurcharge will be the difference between the cV and 10", () => {
  const given: DeliveryFeeForm = {
    cartValue: 8.9,
    deliveryDistance: 1,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(3.1);
});

test("if dD is less er equal 1000 the delivery fee is 2", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(2);
});

test("if dD is 1499 the delivery fee is 3", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1499,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(3);
});

test("if dD is 1500 the delivery fee is 3", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1500,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(3);
});

test("if dD is 1501 the delivery fee is 4", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1501,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(4);
});

test("if dD is 2235 the delivery fee is 5", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 2235,
    itemCount: 1,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(5);
});

test("if nI is 4 or less there will be no itemSurcharge ", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1,
    itemCount: 4,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(2);
});

test("if nI is 5 or more 0.50 itemSurcharge will be added per item above an including the fifth ", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1,
    itemCount: 5,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(2.5);
});

test("if nI is 5 or more 0.50 itemSurcharge will be added per item above an including the fifth ", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1,
    itemCount: 10,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(5);
});

test("if nI is more than 12 in addition to the itemSurcharge an bulkFee of 1.20 is added ", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1,
    itemCount: 13,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(7.7);
});

test("if nI is more than 12 in addition to the itemSurcharge an bulkFee of 1.20 is added ", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 1,
    itemCount: 14,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(8.2);
});

test("the deliver fee can never be more than 15", () => {
  const given: DeliveryFeeForm = {
    cartValue: 10,
    deliveryDistance: 9999,
    itemCount: 25,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(15);
});

test("The delivery is free (0€) when the cart value is equal or more than 200", () => {
  const given: DeliveryFeeForm = {
    cartValue: 200,
    deliveryDistance: 1,
    itemCount: 13,
    orderTime: new Date(2024, 1, 31, 12),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(0);
});

test("During the Friday rush, 3 - 7 PM, the delivery fee will be multiplied by 1.2x", () => {
  const given: DeliveryFeeForm = {
    cartValue: 8.9,
    deliveryDistance: 2235,
    itemCount: 5,
    orderTime: new Date(2024, 0, 26, 18),
  };
  const actual = calculateFee(given);
  expect(actual).toEqual(7.92);
});
