import { DeliveryFeeForm } from "../models/DeliveryFeeForm";

function calculateDeliveryFee(form: DeliveryFeeForm): number {
  let fee = 0;

  if (form.cartValue <= 10) {
    const orderSurcharge: number = 10 - form.cartValue;
    fee = fee + orderSurcharge;
  }

  if (form.deliveryDistance >= 0 && form.deliveryDistance <= 1000) {
    fee += 2;
  }

  if (form.deliveryDistance > 1000) {
    const additionalFee: number = Math.ceil(
      (form.deliveryDistance - 1000) / 500
    );
    fee += 2 + additionalFee;
  }

  if (form.itemCount >= 5) {
    const itemSurcharge: number = (form.itemCount - 4) * 0.5;
    fee = fee + itemSurcharge;
  }

  if (form.itemCount > 12) {
    const bulkFee: number = 1.2;
    fee = fee + bulkFee;
  }

  if (form.cartValue >= 200) {
    fee = 0;
  }

  if (
    form.orderTime.getDay() === 5 &&
    form.orderTime.getHours() >= 15 &&
    form.orderTime.getHours() <= 19
  ) {
    fee = fee * 1.2;
  }

  if (fee > 15) {
    fee = 15;
  }

  return Math.round(fee * 100) / 100;
}

export default calculateDeliveryFee;
