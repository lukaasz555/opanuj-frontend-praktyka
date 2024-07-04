export interface Order {
  id: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

export const getTotalPrice = (order: Order): number => {
  if (!order.items.length) {
    throw new Error('Orders array is empty');
  }

  const totalPrice = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (totalPrice < 0) {
    throw new Error('Total can not be negative');
  }

  return totalPrice;
};
