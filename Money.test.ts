import { describe, expect, it } from '@jest/globals';
import { Money, Franc } from '.';

describe('Money Test', () => {
  it('test multiplication', () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(five.times(2));
    expect(Money.dollar(15)).toStrictEqual(five.times(3));
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(new Franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it('test franc multiplication', () => {
    const five = new Franc(5);
    expect(new Franc(10)).toStrictEqual(five.times(2));
    expect(new Franc(15)).toStrictEqual(five.times(3));
  });
});
