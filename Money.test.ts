import { describe, expect, it } from '@jest/globals';
import { Franc, Money } from '.';

describe('Money Test', () => {
  it('test multiplication', () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(five.times(2));
    expect(Money.dollar(15)).toStrictEqual(five.times(3));
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it('test franc multiplication', () => {
    const five = Money.franc(5);
    expect(Money.franc(10)).toStrictEqual(five.times(2));
    expect(Money.franc(15)).toStrictEqual(five.times(3));
  });

  it('test currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  it('test different class equality', () => {
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF')));
  });
});
