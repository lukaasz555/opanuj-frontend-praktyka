import { describe, test, expect } from 'vitest';
import { getTotalPrice, Order } from './index';

describe('total price calculation', () => {
  test('should return 0 for empty order', () => {
    // arrange:
    const order: Order = {
      id: 1,
      items: [
        {
          name: 'test item 1',
          quantity: 1,
          price: 50, // 50
        },
        {
          name: 'test item 2',
          quantity: 3,
          price: 100, // 300
        },
        {
          name: 'test item 3',
          quantity: 1,
          price: 200, // 200
        },
      ],
    };

    // act + assert:
    expect(getTotalPrice(order)).toBe(550);
  });

  test('should throw error if there is no items in order', () => {
    // arrange:
    const order: Order = {
      id: 1,
      items: [],
    };

    // act + assert:
    expect(() => getTotalPrice(order)).toThrowError('Orders array is empty');
  });

  test('should throw error if total price is lesser than 0', () => {
    // arrange:
    const order: Order = {
      id: 1,
      items: [
        {
          name: 'test item 1',
          quantity: 1,
          price: -50,
        },
      ],
    };

    // act + assert:
    expect(() => getTotalPrice(order)).toThrowError(
      'Total can not be negative'
    );
  });
});
