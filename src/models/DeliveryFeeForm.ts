/**
 * Holds the parameters to do fee calculations on.
 */
export interface DeliveryFeeForm {
  /**
   * Total value of items in the cart in EUR currency.
   */
  cartValue: number;
  /**
   * Distance for this delivery in meters.
   */
  deliveryDistance: number;
  /**
   * Number of items in the cart.
   */
  itemCount: number;
  /**
   * Order Timestamp in local time.
   */
  orderTime: Date;
}
